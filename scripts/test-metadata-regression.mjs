import { constructMetadata, cleanUrl, getSiteUrl } from '../src/utils/seo.ts';
import assert from 'node:assert';

// Simulated routes
const routes = [
    { name: 'Home', data: { page: 'home', canonicalUrl: 'http://localhost:3000/' }, fallback: { title: 'Home Title', slug: '' } },
    { name: 'About', data: null, fallback: { title: 'About Us', slug: 'about-us' } },
    { name: 'Contact', data: { canonicalUrl: '/http://localhost:3000/contact-us' }, fallback: { title: 'Contact', slug: 'contact-us' } },
    { name: 'Services', data: { canonicalUrl: 'https://sbn-preview.vercel.app/services' }, fallback: { title: 'Services', slug: 'services' } },
    { name: 'Eligibility', data: { title: 'CMS Custom Title' }, fallback: { title: 'Default Title', slug: 'services/eligibility-verification' } },
    { name: 'Blog Article', data: { slug: 'sample-blog-post', ogImage: 'http://localhost:3000/img/blog.jpg' }, fallback: { title: 'Blog', slug: 'blog/sample-blog-post' } },
];

console.log('--- STARTING PRODUCTION METADATA REGRESSION SUITE ---');

let failureCount = 0;

for (const route of routes) {
    const meta = constructMetadata(route.data, route.fallback);
    const canonical = meta.alternates?.canonical;
    const ogUrl = meta.openGraph?.url;
    const ogImage = meta.openGraph?.images?.[0]?.url;
    const metadataBase = meta.metadataBase?.toString();

    console.log(`\nTesting route [${route.name}]:`);
    console.log(`  Canonical: ${canonical}`);
    console.log(`  OG URL:    ${ogUrl}`);
    console.log(`  OG Image:  ${ogImage}`);
    console.log(`  Base:      ${metadataBase}`);

    // Test 1: No localhost or loopback in any output
    const allSerialized = JSON.stringify(meta);
    if (allSerialized.includes('localhost') || allSerialized.includes('127.0.0.1')) {
        console.error(`  FAIL: Localhost string detected in metadata for ${route.name}!`);
        failureCount++;
    } else {
        console.log('  PASS: Zero localhost leakage.');
    }

    // Test 2: No vercel.app preview domain leakage
    if (allSerialized.includes('vercel.app')) {
        console.error(`  FAIL: Vercel preview domain leaked in metadata for ${route.name}!`);
        failureCount++;
    } else {
        console.log('  PASS: Zero staging/preview domain leakage.');
    }

    // Test 3: No broken /http:/ or duplicate protocols
    if (allSerialized.includes('/http:/') || allSerialized.includes('/https:/')) {
        console.error(`  FAIL: Double host/protocol concatenation detected in ${route.name}!`);
        failureCount++;
    } else {
        console.log('  PASS: Canonical & OG URL correctly formatted.');
    }

    // Test 4: Canonical must start with https://www.sbnhealthcaresolution.com
    if (!canonical?.startsWith('https://www.sbnhealthcaresolution.com')) {
        console.error(`  FAIL: Canonical does not use production base for ${route.name}!`);
        failureCount++;
    } else {
        console.log('  PASS: Production base domain strictly enforced.');
    }
}

// Test CMS Precedence
console.log('\nTesting CMS Precedence...');
const populated = constructMetadata({ title: 'CMS Overridden Title' }, { title: 'Fallback Title' });
assert.strictEqual(populated.title, 'CMS Overridden Title', 'CMS title should override fallback');

const emptyFallback = constructMetadata({}, { title: 'Fallback Title' });
assert.strictEqual(emptyFallback.title, 'Fallback Title', 'Fallback title should be used when CMS is empty');
console.log('PASS: CMS precedence verified.');

if (failureCount > 0) {
    console.error(`\nREGRESSION TEST SUITE FAILED with ${failureCount} errors.`);
    process.exit(1);
} else {
    console.log('\nALL METADATA REGRESSION TESTS PASSED (0 defects found).');
    process.exit(0);
}
