import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

/**
 * 批量转换 SVG 为 JPG
 * 并更新博客数据中的路径引用
 */

// 配置
const config = {
    svgDir: path.join(process.cwd(), 'src/assets/images/blog'),
    outputDir: path.join(process.cwd(), 'src/assets/images/blog'),
    blogContentDir: path.join(process.cwd(), 'src/content/blog'),
    jpgQuality: 90,
    jpgSize: { width: 800, height: 600 }
};

// 需要转换的 SVG 文件
const svgFiles = [
    'mcp-protocol.svg',
    'not-only-data-collection.svg',
    'not-only-website.svg'
];

/**
 * 转换 SVG 为 JPG
 */
async function convertSvgToJpg(svgFile) {
    const svgPath = path.join(config.svgDir, svgFile);
    const jpgFile = svgFile.replace('.svg', '.jpg');
    const jpgPath = path.join(config.outputDir, jpgFile);
    
    try {
        // 使用 Sharp 转换 SVG 为 JPG
        await sharp(svgPath)
            .resize(config.jpgSize.width, config.jpgSize.height, {
                fit: 'contain',
                background: { r: 255, g: 255, b: 255, alpha: 1 }
            })
            .jpeg({ quality: config.jpgQuality })
            .toFile(jpgPath);
        
        console.log(`✅ 转换成功: ${svgFile} -> ${jpgFile}`);
        
        // 删除原 SVG 文件
        fs.unlinkSync(svgPath);
        console.log(`🗑️  删除原文件: ${svgFile}`);
        
        return jpgFile;
    } catch (error) {
        console.error(`❌ 转换失败 ${svgFile}:`, error.message);
        return null;
    }
}

/**
 * 更新博客内容中的图片路径
 */
function updateBlogImagePaths() {
    const locales = ['en', 'zh-CN'];
    
    locales.forEach(locale => {
        const localeDir = path.join(config.blogContentDir, locale);
        
        if (!fs.existsSync(localeDir)) {
            console.log(`⚠️  目录不存在: ${localeDir}`);
            return;
        }
        
        const files = fs.readdirSync(localeDir);
        
        files.forEach(file => {
            if (path.extname(file) === '.md') {
                const filePath = path.join(localeDir, file);
                let content = fs.readFileSync(filePath, 'utf8');
                
                // 更新 SVG 路径为 JPG 路径
                let updated = false;
                
                svgFiles.forEach(svgFile => {
                    const jpgFile = svgFile.replace('.svg', '.jpg');
                    const svgPattern = new RegExp(svgFile.replace('.', '\\.'), 'g');
                    
                    if (content.includes(svgFile)) {
                        content = content.replace(svgPattern, jpgFile);
                        updated = true;
                        console.log(`📝 更新 ${locale}/${file}: ${svgFile} -> ${jpgFile}`);
                    }
                });
                
                if (updated) {
                    fs.writeFileSync(filePath, content);
                    console.log(`✅ 更新文件: ${locale}/${file}`);
                }
            }
        });
    });
}

/**
 * 主函数
 */
async function main() {
    console.log('🚀 开始批量转换 SVG 为 JPG...\n');
    
    // 1. 转换 SVG 为 JPG
    console.log('📸 转换图片文件...');
    for (const svgFile of svgFiles) {
        await convertSvgToJpg(svgFile);
    }
    
    // 2. 更新博客内容中的路径
    console.log('\n📝 更新博客内容路径...');
    updateBlogImagePaths();
    
    console.log('\n✅ 批量转换完成！');
}

// 运行主函数
main().catch(console.error);
