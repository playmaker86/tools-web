"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encode = () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
      setError("");
    } catch (err) {
      setError("编码失败: " + err.message);
      setOutput("");
    }
  };

  const decode = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(input)));
      setOutput(decoded);
      setError("");
    } catch (err) {
      setError("解码失败，请确保输入是有效的 Base64 字符串");
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
        <CardTitle>Base64 编解码工具</CardTitle>
        <CardDescription>Base64 编码和解码工具，支持中文</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">输入内容</label>
          <Textarea
            placeholder="输入需要编码/解码的内容..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[150px] font-mono text-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button onClick={encode}>Base64 编码</Button>
          <Button onClick={decode} variant="secondary">Base64 解码</Button>
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

