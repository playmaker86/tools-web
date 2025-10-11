"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Calculator from "@/components/tools/Calculator";
import JsonFormatter from "@/components/tools/JsonFormatter";
import Base64Tool from "@/components/tools/Base64Tool";
import TimestampConverter from "@/components/tools/TimestampConverter";
import UrlTool from "@/components/tools/UrlTool";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* 页面标题 */}
        <div className="text-center space-y-4 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            工具箱
          </h1>
          <p className="text-muted-foreground">
            实用的工具集合，助力你的日常工作
          </p>
        </div>

        {/* 工具 Tabs */}
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            <TabsTrigger value="calculator" className="text-xs md:text-sm">
              🔢 计算器
            </TabsTrigger>
            <TabsTrigger value="json" className="text-xs md:text-sm">
              📋 JSON
            </TabsTrigger>
            <TabsTrigger value="base64" className="text-xs md:text-sm">
              🔐 Base64
            </TabsTrigger>
            <TabsTrigger value="timestamp" className="text-xs md:text-sm">
              ⏰ 时间戳
            </TabsTrigger>
            <TabsTrigger value="url" className="text-xs md:text-sm">
              🔗 URL
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="calculator" className="mt-0">
              <Calculator />
            </TabsContent>

            <TabsContent value="json" className="mt-0">
              <JsonFormatter />
            </TabsContent>

            <TabsContent value="base64" className="mt-0">
              <Base64Tool />
            </TabsContent>

            <TabsContent value="timestamp" className="mt-0">
              <TimestampConverter />
            </TabsContent>

            <TabsContent value="url" className="mt-0">
              <UrlTool />
            </TabsContent>
          </div>
        </Tabs>

        {/* 页脚 */}
        {/* <div className="text-center text-sm text-muted-foreground py-4">
          <p>
            使用 Next.js 15 + Turbopack + shadcn/ui 构建 | 
            <span className="ml-2">专为后端开发者打造</span>
          </p>
        </div> */}
      </div>
    </div>
  );
}
