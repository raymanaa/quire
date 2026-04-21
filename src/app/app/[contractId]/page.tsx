import { notFound } from "next/navigation";
import { ContractViewer } from "@/components/contract-viewer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CONTRACTS, getContract } from "@/lib/contracts";

export function generateStaticParams() {
  return CONTRACTS.map((c) => ({ contractId: c.slug }));
}

export const dynamicParams = false;

export default async function ContractPage({
  params,
}: {
  params: Promise<{ contractId: string }>;
}) {
  const { contractId } = await params;
  const contract = getContract(contractId);
  if (!contract) notFound();
  return (
    <div className="mx-auto max-w-[1360px] px-6 pt-6 pb-24 md:px-8">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <Link
          href="/app"
          className="inline-flex items-center gap-1.5 text-[12px] text-ink-3 hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="label !text-[10px]">All contracts</span>
        </Link>
        <span className="mono text-[10.5px] text-ink-3 tracking-[0.12em]">
          QUIRE · {contract.id.toUpperCase()}
        </span>
      </div>

      <header className="pt-10 pb-6">
        <div className="label">{contract.kind.toUpperCase()} · {contract.pages} PAGES</div>
        <h1 className="display mt-3 text-[38px] leading-[1.02] tracking-[-0.012em] text-ink md:text-[54px]">
          {contract.title}
        </h1>
        <p className="display-italic mt-2 text-[17px] text-ink-2">
          {contract.counterparty}
        </p>
        <p className="mt-5 max-w-[66ch] text-[14.5px] leading-[1.7] text-ink-2">
          {contract.summary}
        </p>
      </header>

      <ContractViewer contracts={[contract]} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ contractId: string }>;
}) {
  const { contractId } = await params;
  const c = getContract(contractId);
  if (!c) return { title: "Contract · Quire" };
  return { title: `${c.title} · Quire`, description: c.summary };
}
