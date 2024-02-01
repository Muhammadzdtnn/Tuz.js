<script>/*<![CDATA[*/
  ! function (c) {
    const l = {
      get: e => (e = document['cookie']['match'](new RegExp('(?:^|; )' + e.replace(/([.$?*|{}()[\]\\/+^])/g, "$1") + '=([^;]*)'))) ? decodeURIComponent(e[1]) : void 0,
      set: (e, t, n = {}) => {
        (n = {
          path: "/",
          ...n
        })['expires'] instanceof Date && (n['expires'] = n['expires']['toUTCString']());
        let i = unescape(encodeURIComponent(e)) + "=" + unescape(encodeURIComponent(t));
        for (var a in n) {
          i += "; " + a;
          var r = n[a];
          !0 !== r && (i += "=" + r)
        }
        document['cookie'] = i
      },
      rem: e => {
        const t = {};
        t['max-age'] = -1, l.set(e, "", t)
      }
    };
    function e() {
      return null !== document['getElementById']('nldblog-ad')
    }
    function r(e) {
      return 'function' == typeof e
    }
    function n(a) {
      let s = document['createElement']('div');
      s.id = 'nldblog-ad', s.classList['add']('fcAd'), s.innerHTML = "<div class='fcFx'><button class='fcBt hidden'><svg viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'/></svg><span>" + c.message + "</span></button><div class='fcCn'><ins class='adsbygoogle' data-ad-client='ca-pub-" + c['publisherID'] + "' data-ad-format='auto' data-ad-slot='" + c['adUnits'][Math['floor'](Math['random']() * c['adUnits']['length'])] + "' data-full-width-responsive='false' style='display:block'></ins></div></div>", document['body'].appendChild(s);
      let d = [];
      function u(e, t) {
        const n = {};
        n['shown'] = !1, n.clicked = null, n['error'] = t || null, 0 === d['length'] && (e ? (l['set'](c['cookie'], 1, {
          secure: !0,
          "max-age": c['maxage']
        }), setTimeout(function () {
          const e = {};
          e['shown'] = !0, e['clicked'] = !0, s['remove'](), r(a) && a(e)
        }, 2e3)) : (s['remove'](), r(a) && a(n)), d['push'](1))
      }
      try {
        (adsbygoogle = window['adsbygoogle'] || [])['push']({})
      } catch (e) {
        u(!1, e)
      }
      let f = s['querySelector'](".fcCn ins.adsbygoogle");
      null !== f && f['addEventListener']('click', function (e) {
        u(!0)
      });
      let p = setInterval(() => {
        var t = s['querySelector']('.fcCn ins.adsbygoogle iframe'),
            e = f['getAttribute']('data-ad-status');
        const o = {};
        o['shown'] = !1, o['clicked'] = null, "unfilled" === e ? (clearInterval(p), r(a) && a(o)) : 'filled' === e && null !== t && (clearInterval(p), s['querySelector'](".fcBt")['classList']['remove']('hidden'), window['addEventListener']('blur', function (e) {
          document['activeElement'] === t && u(!0)
        }))
      }, 100);
      setTimeout(function () {
        ('done' !== f['getAttribute']('data-adsbygoogle-status') || 'done' === f['getAttribute']('data-adsbygoogle-status') && 'filled' !== f['getAttribute']('data-ad-status')) && u(!1)
      }, 5e3)
    }

    function t(t) {
      const i = {};
      if (i['shown'] = !1, i.clicked = null, !1 === e())
        if (0 === document['querySelectorAll']("script[src*='client=ca-pub-" + c['publisherID'] + "']")['length']) {
          let e = document['createElement']("script");
          e['setAttribute']("crossorigin", 'anonymous'), e['async'] = !0, e.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-' + c['publisherID'], e['onload'] = function () {
            n(t)
          }, e['onerror'] = function () {
            const e = {};
            e['shown'] = !1, e.clicked = null, r(t) && t(e)
          }, document['head'].appendChild(e)
        } else n(t);
      else r(t) && t(i)
    }

    Object['defineProperties'](e, {
      init: {
        value: function (e) {
          if (null == l['get'](c['cookie'])) return t(e);
          const o = {};
          o['shown'] = !1, o['clicked'] = null, r(e) && e(o)
        }
      },
      show: {
        value: t
      }
    });

    let o = document['createElement']("style");
    o.textContent = ".fcBt{outline: none;border: none;padding: 0;margin: 0;position: absolute;top: 30px;right: 30px;width: 30px;height: 30px;display: flex;align-items:center;justify-content:center;border-radius:50%;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.07);cursor: pointer;}.fcBt svg{width: 18px;height: 18px;fill: #686868 }.fcBt:hover span{opacity: 1;visibility: visible;top: calc(30px + 10px);}.fcBt span{position:absolute;top:30px;right:-15px;background:#fff;max-width:300px;width:180px;border-radius:10px;padding:10px;font-size:13px;line-height:1.1rem;box-shadow:0 0 20px rgba(0,0,0,.07);opacity:0;visibility:hidden;transition:all .2s ease;pointer-events: none;}.fcBt span::before{content:'';position: absolute;width:10px;height:10px;background:#fff;top:-4px;right:25px;transform:rotate(45deg);border-radius:2px;}.fcAd{position: fixed;top: -30%;right: -30%;bottom: -30%;left: -30%;background: rgba(0,0,0,.3);z-index: 999;}.fcFx{position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 999;padding: 20px;display: flex;align-items: center;justify-content: center;}.fcCn{background: #fff;padding: 10px;width: 100%;border-radius: 8px;max-width: 768px;}";
    document['head'].appendChild(o), window['popupAds'] = e;
  }({
    publisherID: 9438297363483589,
    adUnits: [3978750757, 1154126928, 3978750757],
    cookie: "__CLICK",
    message: "انقر على الاعلان لاغلاقه .... Click on Ads to support .",
   
    maxage: 24 * 60 * 60
  })
  popupAds.init()
/*]]>*/</script>
