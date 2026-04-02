import fs from 'fs';
import path from 'path';

/**
 * 批量处理博客图片
 * - 删除有问题的 SVG 文件
 * - 更新博客数据中的路径引用为 JPG
 */

// 配置
const config = {
    imagesDir: path.join(process.cwd(), 'src/assets/images/blog'),
    blogContentDir: path.join(process.cwd(), 'src/content/blog')
};

// 需要处理的图片文件映射
const imageMapping = [
    { svg: 'mcp-protocol.svg', jpg: 'mcp-protocol.jpg' },
    { svg: 'not-only-data-collection.svg', jpg: 'not-only-data-collection.jpg' },
    { svg: 'not-only-website.svg', jpg: 'not-only-website.jpg' }
];

/**
 * 删除有问题的 SVG 文件
 */
function removeProblematicSvgFiles() {
    console.log('🗑️  删除有问题的 SVG 文件...');
    
    imageMapping.forEach(({ svg }) => {
        const svgPath = path.join(config.imagesDir, svg);
        
        if (fs.existsSync(svgPath)) {
            try {
                fs.unlinkSync(svgPath);
                console.log(`✅ 删除: ${svg}`);
            } catch (error) {
                console.error(`❌ 删除失败 ${svg}:`, error.message);
            }
        } else {
            console.log(`⚠️  文件不存在: ${svg}`);
        }
    });
}

/**
 * 更新博客内容中的图片路径
 */
function updateBlogImagePaths() {
    console.log('📝 更新博客内容路径...');
    
    const locales = ['en', 'zh-CN'];
    let updatedCount = 0;
    
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
                let fileUpdated = false;
                
                // 更新 SVG 路径为 JPG 路径
                imageMapping.forEach(({ svg, jpg }) => {
                    const svgPattern = new RegExp(svg.replace('.', '\\.'), 'g');
                    
                    if (content.includes(svg)) {
                        content = content.replace(svgPattern, jpg);
                        fileUpdated = true;
                        updatedCount++;
                        console.log(`📝 更新 ${locale}/${file}: ${svg} -> ${jpg}`);
                    }
                });
                
                if (fileUpdated) {
                    fs.writeFileSync(filePath, content);
                    console.log(`✅ 更新文件: ${locale}/${file}`);
                }
            }
        });
    });
    
    return updatedCount;
}

/**
 * 检查 JPG 文件是否存在
 */
function checkJpgFiles() {
    console.log('🔍 检查 JPG 文件...');
    
    imageMapping.forEach(({ jpg }) => {
        const jpgPath = path.join(config.imagesDir, jpg);
        
        if (fs.existsSync(jpgPath)) {
            const stats = fs.statSync(jpgPath);
            console.log(`✅ JPG 文件存在: ${jpg} (${(stats.size / 1024).toFixed(1)} KB)`);
        } else {
            console.log(`❌ JPG 文件缺失: ${jpg}`);
        }
    });
}

/**
 * 主函数
 */
function main() {
    console.log('🚀 开始批量处理博客图片...\n');
    
    // 1. 检查现有 JPG 文件
    checkJpgFiles();
    
    // 2. 删除有问题的 SVG 文件
    removeProblematicSvgFiles();
    
    // 3. 更新博客内容中的路径
    const updatedCount = updateBlogImagePaths();
    
    console.log(`\n✅ 批量处理完成！更新了 ${updatedCount} 个文件`);
}

// 运行主函数
main().catch(error => console.error(error));
