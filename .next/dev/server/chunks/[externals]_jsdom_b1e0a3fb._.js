module.exports = [
"[externals]/jsdom [external] (jsdom, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_jsdom_6f9915bc._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/jsdom [external] (jsdom, cjs)");
    });
});
}),
];