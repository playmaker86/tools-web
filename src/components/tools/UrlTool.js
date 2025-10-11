"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";

export default function UrlTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encodeUrl = () => {
    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
      setError("");
    } catch (err) {
      setError("编码失败: " + err.message);
      setOutput("");
    }
  };

  const decodeUrl = () => {
    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
      setError("");
    } catch (err) {
      setError("解码失败: " + err.message);
      setOutput("");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>URL 编解码工具</CardTitle>
        <CardDescription>URL 编码和解码工具，支持中文和特殊字符</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">输入内容</label>
          <Textarea
            placeholder="例如: https://example.com/搜索?q=你好"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[150px] font-mono text-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button onClick={encodeUrl}>URL 编码</Button>
          <Button onClick={decodeUrl} variant="secondary">URL 解码</Button>
          <Button onClick={clearAll} variant="outline">清空</Button>
          {output && (
            <Button onClick={copyToClipboard} variant="outline">复制结果</Button>
          )}
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {output && (
          <div>
            <label className="text-sm font-medium mb-2 block">输出结果</label>
            <Textarea
              value={output}
              readOnly
              className="min-h-[150px] font-mono text-sm bg-muted"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

