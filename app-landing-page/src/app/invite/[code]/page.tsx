import type { Metadata } from 'next';
import Link from 'next/link';

import { ctaDetails } from '@/data/cta';
import { siteDetails } from '@/data/siteDetails';

type InvitePageProps = {
  params: Promise<{ code: string }>;
};

const inviteCodeRegex = /^[A-Za-z0-9]{8}$/;

function normalizeCode(rawCode: string): string {
  return rawCode.trim().toUpperCase();
}

function isValidInviteCode(code: string): boolean {
  return inviteCodeRegex.test(code);
}

export async function generateMetadata({ params }: InvitePageProps): Promise<Metadata> {
  const { code } = await params;
  const normalizedCode = normalizeCode(code);

  return {
    title: `Join Trip Invite ${normalizedCode} | ${siteDetails.siteName}`,
    description: `Open TripSync to join this trip using invite code ${normalizedCode}.`,
  };
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { code } = await params;
  const normalizedCode = normalizeCode(code);
  const validInviteCode = isValidInviteCode(normalizedCode);

  const deepLink = `tripsync://invite/${normalizedCode}`;
  const appStoreUrl = ctaDetails.appStoreUrl !== '#' ? ctaDetails.appStoreUrl : '/#cta';

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <h1 className="mb-3 text-3xl font-semibold manrope md:text-4xl">Trip Invite</h1>
        <p className="mb-8 text-foreground-accent">
          Open TripSync to join this trip. If the app is not installed, install it first and then come
          back to this invite.
        </p>

        <div className="mb-8 rounded-2xl bg-[#f5f6fa] p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground-accent">Invite Code</p>
          <p className="text-2xl font-semibold tracking-widest manrope">{normalizedCode}</p>
          {!validInviteCode && (
            <p className="mt-3 text-sm text-red-600">
              This invite code format looks invalid. Please verify the link shared with you.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={deepLink}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-black transition-colors hover:bg-primary-accent"
          >
            Open in App
          </a>
          <Link
            href={appStoreUrl}
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 font-semibold text-black transition-colors hover:bg-black/5"
          >
            Download from App Store
          </Link>
        </div>
      </div>
    </section>
  );
}
