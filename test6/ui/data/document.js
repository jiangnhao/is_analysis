$axure.loadDocument(
    (function () {
        var _ = function () {
            var r = {}, a = arguments;
            for (var i = 0; i < a.length; i += 2) r[a[i]] = a[i + 1];
            return r;
        }
        var _creator = function () {
            return _(b, _(c, d, e, f, g, d, h, d, i, d, j, k, l, d, m, f, n, f, o, f, p, f, q, [], r, f), s, _(t, [_(u, v, w, x, y, z, A, [_(u, B, w, x, y, C), _(u, D, w, x, y, E), _(u, F, w, x, y, G), _(u, H, w, x, y, I), _(u, J, w, x, y, K), _(u, L, w, x, y, M), _(u, N, w, x, y, O), _(u, P, w, x, y, Q), _(u, R, w, x, y, S), _(u, T, w, x, y, U)])]), V, _(W, X), Y, _(Z, ba, bb, _(bc, bd, be, bd), bf, bg), bh, [], bi, _(bj, _(bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, f, bv, _(bw, bx, by, bz, bA, bB), bC, bD, bE, bp, bF, _(bG, bd, bH, bd), bb, _(bc, bd, be, bd), bI, d, bJ, f, bK, bl, bL, _(bw, bx, by, bM), bN, _(bw, bx, by, bO), bP, bQ, bR, bx, bA, bQ, bS, bT, bU, bV, bW, bX, bY, bX, bZ, bX, ca, bX, cb, _(), cc, bT, cd, bT, ce, _(cf, f, cg, ch, ci, ch, cj, ch, by, _(ck, cl, cm, cl, cn, cl, co, cp)), cq, _(cf, f, cg, bd, ci, ch, cj, ch, by, _(ck, cl, cm, cl, cn, cl, co, cp)), cr, _(cf, f, cg, bB, ci, bB, cj, ch, by, _(ck, cl, cm, cl, cn, cl, co, cs))), ct, _(cu, _(bk, cv, bs, cw, bm, cx, bP, bT, bL, _(bw, bx, by, cy), bC, cz, bU, cA, bW, bT, bY, bT, bZ, bT, ca, bT), cB, _(bk, cC, bs, cD, bm, cx, bP, bT, bL, _(bw, bx, by, cy), bC, cz, bU, cA, bW, bT, bY, bT, bZ, bT, ca, bT), cE, _(bk, cF, bs, cG, bm, cx, bP, bT, bL, _(bw, bx, by, cy), bC, cz, bU, cA, bW, bT, bY, bT, bZ, bT, ca, bT), cH, _(bk, cI, bs, cJ, bm, cx, bP, bT, bL, _(bw, bx, by, cy), bC, cz, bU, cA, bW, bT, bY, bT, bZ, bT, ca, bT), cK, _(bk, cL, bm, cx, bP, bT, bL, _(bw, bx, by, cy), bC, cz, bU, cA, bW, bT, bY, bT, bZ, bT, ca, bT), cM, _(bk, cN, bs, cO, bm, cx, bP, bT, bL, _(bw, bx, by, cy), bC, cz, bU, cA, bW, bT, bY, bT, bZ, bT, ca, bT), cP, _(bk, cQ, bP, bT, bL, _(bw, bx, by, cy), bC, cz, bU, cA, bW, bT, bY, bT, bZ, bT, ca, bT), cR, _(bk, cS), cT, _(bk, cU), cV, _(bk, cW, bC, cz, bL, _(bw, bx, by, cX), bP, bT, bU, cA, bW, cY, bY, cY, bZ, cY, ca, cY, ce, _(cf, d, cg, ch, ci, ch, cj, ch, by, _(ck, cl, cm, cl, cn, cl, co, cZ))), da, _(bk, db, bP, bT), dc, _(bk, dd, bv, _(bw, bx, by, de, bA, bB), bC, cz, bU, bV), df, _(bk, dg, bS, dh), di, _(bk, dj, bC, cz, bU, cA), dk, _(bk, dl, bL, _(bw, bx, by, cy), bP, dh), dm, _(bk, dn, bL, _(bw, bx, by, bz), bP, bT), dp, _(bk, dq, bv, _(bw, bx, by, de, bA, bB), bC, cz, bU, cA), dr, _(bk, ds, bC, bD), dt, _(bk, du, bv, _(bw, bx, by, de, bA, bB), bC, cz, bU, cA)), dv, _()));
        };
        var b = "configuration", c = "showPageNotes", d = true, e = "showPageNoteNames", f = false,
            g = "showAnnotations", h = "showAnnotationsSidebar", i = "showConsole", j = "linkStyle",
            k = "displayMultipleTargetsOnly", l = "linkFlowsToPages", m = "linkFlowsToPagesNewWindow",
            n = "hideAddress", o = "preventScroll", p = "useLabels", q = "enabledViewIds", r = "loadFeedbackPlugin",
            s = "sitemap", t = "rootNodes", u = "pageName", v = "index", w = "type", x = "Wireframe", y = "url",
            z = "index.html", A = "children", B = "login_in", C = "login_in.html", D = "top_meun", E = "top_meun.html",
            F = "student_list", G = "student_list.html", H = "evaluate_grades", I = "evaluate_grades.html",
            J = "inquiry", K = "inquiry.html", L = "modify_userpasswd", M = "modify_userpasswd.html",
            N = "modify_userinfo", O = "modify_userinfo.html", P = "term_select", Q = "term_select.html",
            R = "login_out", S = "login_out.html", T = "evaluate_principle", U = "evaluate_principle.html",
            V = "globalVariables", W = "onloadvariable", X = "", Y = "defaultAdaptiveView", Z = "name", ba = "基本",
            bb = "size", bc = "width", bd = 0, be = "height", bf = "condition", bg = "<=", bh = "adaptiveViews",
            bi = "stylesheet", bj = "defaultStyle", bk = "id", bl = "627587b6038d43cca051c114ac41ad32",
            bm = "fontWeight", bn = "400", bo = "fontStyle", bp = "normal", bq = "fontName",
            br = "'Arial Normal', 'Arial'", bs = "fontSize", bt = "13px", bu = "underline", bv = "foreGroundFill",
            bw = "fillType", bx = "solid", by = "color", bz = 0xFF333333, bA = "opacity", bB = 1,
            bC = "horizontalAlignment", bD = "center", bE = "lineSpacing", bF = "location", bG = "x", bH = "y",
            bI = "visible", bJ = "limbo", bK = "baseStyle", bL = "fill", bM = 0xFFFFFFFF, bN = "borderFill",
            bO = 0xFF797979, bP = "borderWidth", bQ = "1", bR = "linePattern", bS = "cornerRadius", bT = "0",
            bU = "verticalAlignment", bV = "middle", bW = "paddingLeft", bX = "2", bY = "paddingTop",
            bZ = "paddingRight", ca = "paddingBottom", cb = "stateStyles", cc = "rotation", cd = "textRotation",
            ce = "outerShadow", cf = "on", cg = "offsetX", ch = 5, ci = "offsetY", cj = "blurRadius", ck = "r", cl = 0,
            cm = "g", cn = "b", co = "a", cp = 0.349019607843137, cq = "innerShadow", cr = "textShadow",
            cs = 0.647058823529412, ct = "customStyles", cu = "_一级标题", cv = "1111111151944dfba49f67fd55eb1f88",
            cw = "32px", cx = "bold", cy = 0xFFFFFF, cz = "left", cA = "top", cB = "_二级标题",
            cC = "b3a15c9ddde04520be40f94c8168891e", cD = "24px", cE = "_三级标题", cF = "8c7a4c5ad69a4369a5f7788171ac0b32",
            cG = "18px", cH = "_四级标题", cI = "e995c891077945c89c0b5fe110d15a0b", cJ = "14px", cK = "_五级标题",
            cL = "386b19ef4be143bd9b6c392ded969f89", cM = "_六级标题", cN = "fc3b9a13b5574fa098ef0a1db9aac861", cO = "10px",
            cP = "_文本段落", cQ = "4988d43d80b44008a4a415096f1632af", cR = "box_1",
            cS = "98391f1ff453437f82c9148882891830", cT = "table_cell", cU = "babb00d1eb104c94ad6cb97f9bfcc718",
            cV = "sticky_3", cW = "1322b97fe6914f2c9a9ca2ab69accb82", cX = 0xFFD0E17D, cY = "10", cZ = 0.2, da = "_图片",
            db = "0cd35324d0e14022acf2bb69f77f8e6a", dc = "text_field", dd = "a89e8f63eef04d17a0b143ce015f173d",
            de = 0xFF000000, df = "button", dg = "b810c846c875472e948cce19e62abc80", dh = "5", di = "radio_button",
            dj = "226a4909cefc486aae67bffe9817dfe8", dk = "arrow", dl = "05b35669dbd745d7887ece6406bea2ba", dm = "icon",
            dn = "011183282e494ea78fa6b274ec8a4451", dp = "text_area", dq = "f7693f59afb345469411c02e74b373c1",
            dr = "html_button", ds = "5340711bf4ab4a3ca59b1b8728f9e010", dt = "droplist",
            du = "25def05a974c48f5851c8f54cf91b86d", dv = "duplicateStyles";
        return _creator();
    })());