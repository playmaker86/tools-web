"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function TimestampConverter() {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [timestamp, setTimestamp] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [convertedResult, setConvertedResult] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timestampToDate = () => {
    try {
      const ts = parseInt(timestamp);
      if (isNaN(ts)) {
        setConvertedResult("请输入有效的时间戳");
        return;
      }
      // 判断是秒还是毫秒
      const milliseconds = ts.toString().length === 10 ? ts * 1000 : ts;
      const date = new Date(milliseconds);
      setConvertedResult(date.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }));
    } catch (err) {
      setConvertedResult("转换失败: " + err.message);
    }
  };

  const dateToTimestamp = () => {
    try {
      const date = new Date(dateTime);
      if (isNaN(date.getTime())) {
        setConvertedResult("请输入有效的日期时间");
        return;
      }
      setConvertedResult(`秒级: ${Math.floor(date.getTime() / 1000)} | 毫秒级: ${date.getTime()}`);
    } catch (err) {
      setConvertedResult("转换失败: " + err.message);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>时间戳转换工具</CardTitle>
        <CardDescription>时间戳与日期时间相互转换</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 当前时间 */}
        <div className="bg-primary text-primary-foreground p-4 rounded-lg">
          <div className="text-sm opacity-90 mb-1">当前时间</div>
          <div className="text-2xl font-bold">
            {new Date(currentTime).toLocaleString("zh-CN")}
          </div>
          <div className="text-sm mt-2 space-y-1">
            <div className="flex justify-between items-center">
              <span>秒级时间戳: {Math.floor(currentTime / 1000)}</span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => copyToClipboard(String(Math.floor(currentTime / 1000)))}
              >
                复制
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <span>毫秒级时间戳: {currentTime}</span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => copyToClipboard(String(currentTime))}
              >
                复制
              </Button>
            </div>
          </div>
        </div>

        {/* 时间戳转日期 */}
        <div className="space-y-2">
          <label className="text-sm font-medium">时间戳转日期</label>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="输入时间戳（秒或毫秒）"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
            />
            <Button onClick={timestampToDate}>转换</Button>
          </div>
        </div>

        {/* 日期转时间戳 */}
        <div className="space-y-2">
          <label className="text-sm font-medium">日期转时间戳</label>
          <div className="flex gap-2">
            <Input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />
            <Button onClick={dateToTimestamp}>转换</Button>
          </div>
        </div>

        {/* 转换结果 */}
        {convertedResult && (
          <div className="bg-muted p-4 rounded-lg">
            <div className="text-sm font-medium mb-2">转换结果</div>
            <div className="text-lg font-mono break-all">{convertedResult}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

