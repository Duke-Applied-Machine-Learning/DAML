import { Card } from "@/components/ui/card";

interface PortfolioItemProps {
  title: string;
  description: string;
  iframeSrc: string;
  iframeTitle?: string;
  iframeHeight?: number;
}

export default function PortfolioItem({
  title,
  description,
  iframeSrc,
  iframeTitle = "Portfolio Item",
  iframeHeight = 600
}: PortfolioItemProps) {
  return (
    <Card className="bg-white rounded-[28px] border border-slate-300/20 shadow-[0_20px_38px_rgba(15,23,42,0.12)] p-12">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center" style={{ minHeight: "700px" }}>
        {/* Left side - Title and Description */}
        <div className="space-y-6 col-span-1 lg:col-span-3">
          <h2 className="text-3xl font-bold text-slate-900 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right side - Iframe */}
        <div className="w-full col-span-1 lg:col-span-7 flex items-center">
          <iframe
            src={iframeSrc}
            className="w-full border-0 rounded-lg shadow-md"
            style={{ height: `${iframeHeight + 200}px` }}
            title={iframeTitle}
            allow="fullscreen"
          />
        </div>
      </div>
    </Card>
  );
}
