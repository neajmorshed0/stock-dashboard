"use client";
import Button from "@/components/Buttons";
import Input from "@/components/Forms/Input";
import Label from "@/components/Forms/Label";
import TextArea from "@/components/Forms/TextArea";
import Typography from "@/components/Typography";
import { useState } from "react";

export default function SuggestionIntegrations() {
  const [text, setText] = useState("");
  return (
    <>
      <div className="pb-4 border-b border-soft-200">
        <h4 className="mb-1 text-base font-medium leading-6 text-strong-950">
          Make a Suggestion
        </h4>
        <p className="text-sm leading-5 text-sub-600">
          Recommend an Integration to help us.
        </p>
      </div>
      <div className="pt-4 ">
        <form action="">
          <div className="space-y-3">
            <div>
              <Label title="Integration Name" type="required" />
              <Input type="text" placeholder="Enter integration name..." />
            </div>
            <div>
              <Label title="Website Name" type="optional" />
              <div className="flex">
                <span className="px-3 py-2.5 border rounded-custom rounded-r-none border-r-0 text-sm text-soft-400">
                  https://
                </span>
                <Input
                  placeholder="www.example.com"
                  className="rounded-l-none"
                />
              </div>
            </div>
            <div>
              <Label title="Reason for Recommendation" type="required" />
              <TextArea
                maxLength={200}
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Explain why you recommend this integration..."
              />
              <Typography size="xs" as="p">
                {" "}
                We may not be able to fulfill every integration request
              </Typography>
            </div>
          </div>
        </form>
      </div>
      <div className="flex gap-3 mt-5">
        <Button variant="outline" className="w-full">
          Discard
        </Button>{" "}
        <Button className="w-full">Submit</Button>
      </div>
    </>
  );
}
