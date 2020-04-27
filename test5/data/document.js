$axure.loadDocument(
    (function () {
        var _ = function () {
            var r = {}, a = arguments;
            for (var i = 0; i < a.length; i += 2) r[a[i]] = a[i + 1];
            return r;
        }
        var _creator = function () {
            return _(b, _(c, d, e, f, g, d, h, d, i, d, j, k, l, d, m, f, n, f, o, f, p, f, q, [], r, f), s, _(t, [_(u, v, w, x, y, z, A, [_(u, B, w, x, y, C, A, [_(u, D, w, x, y, E), _(u, F, w, x, y, G), _(u, H, w, x, y, I)]), _(u, J, w, x, y, K), _(u, L, w, x, y, M), _(u, N, w, x, y, O), _(u, P, w, x, y, Q), _(u, R, w, x, y, S)])]), T, _(U, V), W, _(X, Y, Z, _(ba, bb, bc, bb), bd, be), bf, [], bg, _(bh, _(bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, f, bt, _(bu, bv, bw, bx, by, bz), bA, bB, bC, bn, bD, _(bE, bF, bG, bF), Z, _(ba, bF, bc, bF), bH, d, bI, f, bJ, bj, bK, _(bu, bv, bw, bL), bM, _(bu, bv, bw, bN), bO, bP, bQ, bv, by, bP, bR, bS, bT, bU, bV, bW, bX, bW, bY, bW, bZ, bW, ca, _(), cb, bS, cc, bS, cd, _(ce, f, cf, cg, ch, cg, ci, cg, bw, _(cj, ck, cl, ck, cm, ck, cn, co)), cp, _(ce, f, cf, bF, ch, cg, ci, cg, bw, _(cj, ck, cl, ck, cm, ck, cn, co)), cq, _(ce, f, cf, bz, ch, bz, ci, cg, bw, _(cj, ck, cl, ck, cm, ck, cn, cr))), cs, _(ct, _(bi, cu), cv, _(bi, cw, bO, bS, bK, _(bu, bv, bw, cx)), cy, _(bi, cz, bO, bS, bK, _(bu, bv, bw, cA)), cB, _(bi, cC, bK, _(bu, bv, bw, cx)), cD, _(bi, cE, bR, cF), cG, _(bi, cH, bq, cI, bk, cJ, bO, bS, bK, _(bu, bv, bw, cK), bA, cL, bT, cM, bV, bS, bX, bS, bY, bS, bZ, bS), cN, _(bi, cO, bq, cP, bk, cJ, bO, bS, bK, _(bu, bv, bw, cK), bA, cL, bT, cM, bV, bS, bX, bS, bY, bS, bZ, bS), cQ, _(bi, cR, bq, cS, bk, cJ, bO, bS, bK, _(bu, bv, bw, cK), bA, cL, bT, cM, bV, bS, bX, bS, bY, bS, bZ, bS), cT, _(bi, cU, bq, cV, bk, cJ, bO, bS, bK, _(bu, bv, bw, cK), bA, cL, bT, cM, bV, bS, bX, bS, bY, bS, bZ, bS), cW, _(bi, cX, bk, cJ, bO, bS, bK, _(bu, bv, bw, cK), bA, cL, bT, cM, bV, bS, bX, bS, bY, bS, bZ, bS), cY, _(bi, cZ, bq, da, bk, cJ, bO, bS, bK, _(bu, bv, bw, cK), bA, cL, bT, cM, bV, bS, bX, bS, bY, bS, bZ, bS), db, _(bi, dc, bq, cV, bO, bS, bK, _(bu, bv, bw, cK), bA, cL, bT, cM, bV, bS, bX, bS, bY, bS, bZ, bS), dd, _(bi, de, bO, bS, bK, _(bu, bv, bw, cK), bA, cL, bT, cM, bV, bS, bX, bS, bY, bS, bZ, bS), df, _(bi, dg, bt, _(bu, bv, bw, dh, by, bz), bA, cL, bT, bU), di, _(bi, dj, bt, _(bu, bv, bw, dh, by, bz), bA, cL, bT, cM), dk, _(bi, dl, bt, _(bu, bv, bw, dh, by, bz), bA, cL, bT, cM), dm, _(bi, dn, bA, cL, bT, cM), dp, _(bi, dq, bA, bB), dr, _(bi, ds), dt, _(bi, du, bK, _(bu, bv, bw, cK))), dv, _()));
        };
        var b = "configuration", c = "showPageNotes", d = true, e = "showPageNoteNames", f = false,
            g = "showAnnotations", h = "showAnnotationsSidebar", i = "showConsole", j = "linkStyle",
            k = "displayMultipleTargetsOnly", l = "linkFlowsToPages", m = "linkFlowsToPagesNewWindow",
            n = "hideAddress", o = "preventScroll", p = "useLabels", q = "enabledViewIds", r = "loadFeedbackPlugin",
            s = "sitemap", t = "rootNodes", u = "pageName", v = "index", w = "type", x = "Wireframe", y = "url",
            z = "index.html", A = "children", B = "借阅", C = "借阅.html", D = "书籍查找列表", E = "书籍查找列表.html", F = "书籍详情表",
            G = "书籍详情表.html", H = "借阅成功后", I = "借阅成功后.html", J = "归还", K = "归还.html", L = "查书", M = "查书.html", N = "入库",
            O = "入库.html", P = "缴费", Q = "缴费.html", R = "主页", S = "主页.html", T = "globalVariables",
            U = "onloadvariable", V = "", W = "defaultAdaptiveView", X = "name", Y = "平板横向 (基本)", Z = "size",
            ba = "width", bb = 1024, bc = "height", bd = "condition", be = "<=", bf = "adaptiveViews",
            bg = "stylesheet", bh = "defaultStyle", bi = "id", bj = "627587b6038d43cca051c114ac41ad32",
            bk = "fontWeight", bl = "400", bm = "fontStyle", bn = "normal", bo = "fontName",
            bp = "'Arial Normal', 'Arial'", bq = "fontSize", br = "13px", bs = "underline", bt = "foreGroundFill",
            bu = "fillType", bv = "solid", bw = "color", bx = 0xFF333333, by = "opacity", bz = 1,
            bA = "horizontalAlignment", bB = "center", bC = "lineSpacing", bD = "location", bE = "x", bF = 0, bG = "y",
            bH = "visible", bI = "limbo", bJ = "baseStyle", bK = "fill", bL = 0xFFFFFFFF, bM = "borderFill",
            bN = 0xFF797979, bO = "borderWidth", bP = "1", bQ = "linePattern", bR = "cornerRadius", bS = "0",
            bT = "verticalAlignment", bU = "middle", bV = "paddingLeft", bW = "2", bX = "paddingTop",
            bY = "paddingRight", bZ = "paddingBottom", ca = "stateStyles", cb = "rotation", cc = "textRotation",
            cd = "outerShadow", ce = "on", cf = "offsetX", cg = 5, ch = "offsetY", ci = "blurRadius", cj = "r", ck = 0,
            cl = "g", cm = "b", cn = "a", co = 0.349019607843137, cp = "innerShadow", cq = "textShadow",
            cr = 0.647058823529412, cs = "customStyles", ct = "box_1", cu = "4b7bfc596114427989e10bb0b557d0ce",
            cv = "box_2", cw = "47641f9a00ac465095d6b672bbdffef6", cx = 0xFFF2F2F2, cy = "box_3",
            cz = "0882bfcd7d11450d85d157758311dca5", cA = 0xFFD7D7D7, cB = "placeholder",
            cC = "c50e74f669b24b37bd9c18da7326bccd", cD = "button", cE = "c9f35713a1cf4e91a0f2dbac65e6fb5c", cF = "5",
            cG = "_一级标题", cH = "1111111151944dfba49f67fd55eb1f88", cI = "32px", cJ = "bold", cK = 0xFFFFFF, cL = "left",
            cM = "top", cN = "_二级标题", cO = "b3a15c9ddde04520be40f94c8168891e", cP = "24px", cQ = "_三级标题",
            cR = "8c7a4c5ad69a4369a5f7788171ac0b32", cS = "18px", cT = "_四级标题", cU = "e995c891077945c89c0b5fe110d15a0b",
            cV = "14px", cW = "_五级标题", cX = "386b19ef4be143bd9b6c392ded969f89", cY = "_六级标题",
            cZ = "fc3b9a13b5574fa098ef0a1db9aac861", da = "10px", db = "label", dc = "2285372321d148ec80932747449c36c9",
            dd = "_文本段落", de = "4988d43d80b44008a4a415096f1632af", df = "text_field",
            dg = "44157808f2934100b68f2394a66b2bba", dh = 0xFF000000, di = "droplist",
            dj = "85f724022aae41c594175ddac9c289eb", dk = "list_box", dl = "d5a74867db1f49ceb7c59e94129aa67a",
            dm = "radio_button", dn = "4eb5516f311c4bdfa0cb11d7ea75084e", dp = "html_button",
            dq = "eed12d9ebe2e4b9689b3b57949563dca", dr = "table_cell", ds = "33ea2511485c479dbf973af3302f2352",
            dt = "menu_item", du = "2036b2baccbc41f0b9263a6981a11a42", dv = "duplicateStyles";
        return _creator();
    })());