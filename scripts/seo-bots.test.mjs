import assert from "node:assert/strict";
import test from "node:test";
import { isSocialUnfurlBot } from "../src/lib/seo-bots.ts";
import { absoluteShareImage } from "../src/lib/content/share-image.ts";

test("detects Slackbot", () => {
  assert.equal(isSocialUnfurlBot("Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)"), true);
  assert.equal(isSocialUnfurlBot("Mozilla/5.0"), false);
});

test("absoluteShareImage resolves relative and absolute", () => {
  const origin = "https://businesslistingmanagement.com";
  const fallback = `${origin}/og.png`;
  assert.equal(absoluteShareImage(null, origin, fallback), fallback);
  assert.equal(absoluteShareImage("/media/x.png", origin, fallback), `${origin}/media/x.png`);
  assert.equal(
    absoluteShareImage("https://cdn.example/a.png", origin, fallback),
    "https://cdn.example/a.png",
  );
});

import {
  isVercelAppHost,
  isIndexableMarketingHost,
  robotsTxtForHost,
  deploymentRobotsMeta,
} from "../src/lib/public-host.ts";

test("vercel.app hosts are not indexable", () => {
  assert.equal(isVercelAppHost("blm-pied.vercel.app"), true);
  assert.equal(isIndexableMarketingHost("blm-pied.vercel.app"), false);
  assert.equal(isIndexableMarketingHost("businesslistingmanagement.com"), true);
  assert.equal(isIndexableMarketingHost("www.businesslistingmanagement.com"), false);
  assert.match(robotsTxtForHost("blm-git-abc.vercel.app"), /Disallow: \//);
  assert.match(robotsTxtForHost("businesslistingmanagement.com"), /Allow: \//);
  assert.match(robotsTxtForHost("businesslistingmanagement.com"), /Sitemap:/);
  assert.match(robotsTxtForHost("businesslistingmanagement.com"), /Disallow: \/app/);
  assert.match(robotsTxtForHost("businesslistingmanagement.com"), /Disallow: \/login/);
  assert.match(robotsTxtForHost("businesslistingmanagement.com"), /Disallow: \/admin/);
});

test("deploymentRobotsMeta only for preview/development", () => {
  const prev = process.env.VERCEL_ENV;
  process.env.VERCEL_ENV = "preview";
  assert.equal(deploymentRobotsMeta(), "noindex, nofollow");
  process.env.VERCEL_ENV = "production";
  assert.equal(deploymentRobotsMeta(), undefined);
  process.env.VERCEL_ENV = prev;
});
