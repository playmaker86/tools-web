import {NextResponse} from 'next/server';

// API Route 示例
export async function GET() {
  return NextResponse.json({
    message: '这是一个 API 端点',
    路由: '/api/test',
    文件位置: 'src/app/api/test/route.js',
    时间: new Date().toISOString(),
  });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({
    message: '收到 POST 请求',
    接收数据: body,
  });
}

