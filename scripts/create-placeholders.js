import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

/**
 * 创建占位符 JPG 图片
 */

async function createPlaceholderJpg(filename, width = 800, height = 600, text = 'Image') {
    const imagesDir = path.join(process.cwd(), 'src/assets/images/blog');
    const outputPath = path.join(imagesDir, filename);
    
    try {
        // 创建一个简单的占位符图片
        const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f8fafc"/>
            <rect width="100%" height="100%" fill="none" stroke="#e2e8f0" stroke-width="2"/>
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" 
                  font-family="Arial, sans-serif" font-size="24" fill="#64748b">
                ${text}
            </text>
        </svg>
        `;
        
        await sharp(Buffer.from(svg))
            .png()
            .toBuffer()
            .then(buffer => {
                return sharp(buffer)
                    .jpeg({ quality: 90 })
                    .toFile(outputPath);
            });
        
        console.log(`✅ 创建占位符: ${filename}`);
        return true;
    } catch (error) {
        console.error(`❌ 创建失败 ${filename}:`, error.message);
        return false;
    }
}

async function main() {
    console.log('🚀 创建占位符 JPG 文件...\n');
    
    // 创建缺失的 JPG 文件
    await createPlaceholderJpg('mcp-protocol.jpg', 800, 600, 'MCP Protocol');
    await createPlaceholderJpg('not-only-website.jpg', 800, 600, 'Universal Platform');
    
    console.log('\n✅ 占位符创建完成！');
}

main().catch(error => console.error(error));
