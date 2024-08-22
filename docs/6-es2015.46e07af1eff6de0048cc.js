/** @format */

(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    WAGz: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'InvoiceModule', function () {
          return m;
        });
      var o = e('ofXK'),
        c = e('tyNb'),
        i = e('V5UK'),
        r = e('lJxs'),
        a = e('wd/R'),
        d = e.n(a),
        g = e('fXoL'),
        b = e('kt0X');
      function l(n, t) {
        if (1 & n) {
          const n = g.Ub();
          g.Tb(0, 'div'),
            g.Tb(1, 'div', 5),
            g.Tb(2, 'div', 6),
            g.Tb(3, 'button', 7),
            g.ac('click', function () {
              return g.tc(n), (g.ec().dom.fullscreen = !0);
            }),
            g.Ac(4, 'PDF '),
            g.Ob(5, 'i', 8),
            g.Sb(),
            g.Tb(6, 'button', 9),
            g.ac('click', function () {
              return g.tc(n), (g.ec().dom.views.selected = 'invoice');
            }),
            g.Ob(7, 'i', 10),
            g.Sb(),
            g.Ac(8, ' | '),
            g.Tb(9, 'button', 9),
            g.ac('click', function () {
              return g.tc(n), (g.ec().dom.views.selected = 'timesheet');
            }),
            g.Ob(10, 'i', 11),
            g.Sb(),
            g.Sb(),
            g.Tb(11, 'div', 12),
            g.Tb(12, 'div', 13),
            g.Ob(13, 'input', 14),
            g.Tb(14, 'div', 15),
            g.Tb(15, 'span', 16),
            g.Ob(16, 'i', 17),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Tb(17, 'div', 18),
            g.Tb(18, 'div', 19),
            g.Ob(19, 'span', 20),
            g.Sb(),
            g.Sb(),
            g.Sb();
        }
      }
      function s(n, t) {
        if (
          (1 & n &&
            (g.Tb(0, 'tr'),
            g.Tb(1, 'td'),
            g.Tb(2, 'div', 29),
            g.Ac(3),
            g.Sb(),
            g.Tb(4, 'div', 28),
            g.Ac(5),
            g.Sb(),
            g.Sb(),
            g.Tb(6, 'td', 41),
            g.Ac(7, ' Days '),
            g.Sb(),
            g.Tb(8, 'td', 41),
            g.Ac(9),
            g.fc(10, 'async'),
            g.Sb(),
            g.Tb(11, 'td', 42),
            g.Ac(12),
            g.Sb(),
            g.Tb(13, 'td', 42),
            g.Ac(14),
            g.fc(15, 'currency'),
            g.fc(16, 'async'),
            g.Sb(),
            g.Sb()),
          2 & n)
        ) {
          const n = t.$implicit,
            c = g.ec(2);
          var e, o;
          g.Ab(3),
            g.Bc(n.value.project),
            g.Ab(2),
            g.Cc(' ', n.value.title, ' '),
            g.Ab(4),
            g.Cc('\u20ac ', null == (e = g.gc(10, 5, c.dom.invoice)) ? null : e.rate, ''),
            g.Ab(3),
            g.Cc('', n.value.days, ' '),
            g.Ab(2),
            g.Cc(
              '',
              g.hc(15, 7, n.value.days * (null == (o = g.gc(16, 10, c.dom.invoice)) ? null : o.rate), '\u20ac'),
              ' '
            );
        }
      }
      function p(n, t) {
        if (
          (1 & n &&
            (g.Tb(0, 'div', 21),
            g.Tb(1, 'div', 22),
            g.Tb(2, 'div', 23),
            g.Tb(3, 'div', 24),
            g.Tb(4, 'div', 25),
            g.Ob(5, 'img', 26),
            g.Sb(),
            g.Ob(6, 'div', 27),
            g.Tb(7, 'div', 28),
            g.Tb(8, 'div', 29),
            g.Ac(9, 'Codebrew, Ltd'),
            g.Sb(),
            g.Tb(10, 'div', 30),
            g.Ac(11, ' 63, Snowdon House, Triq Dun Karm Vella, Safi, SFI 1292, Malta'),
            g.Sb(),
            g.Tb(12, 'div', 31),
            g.Tb(13, 'span'),
            g.Ac(14, 'Phone:'),
            g.Sb(),
            g.Ac(15, ' +44 7927 917580'),
            g.Sb(),
            g.Tb(16, 'div', 32),
            g.Tb(17, 'span'),
            g.Ac(18, 'Email:'),
            g.Sb(),
            g.Ac(19, ' info@codebrew.cc'),
            g.Sb(),
            g.Tb(20, 'div', 33),
            g.Tb(21, 'span'),
            g.Ac(22, 'VAT #:'),
            g.Sb(),
            g.Ac(23, ' MT28784017'),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Tb(24, 'div', 34),
            g.Tb(25, 'div', 35),
            g.Tb(26, 'div'),
            g.Ac(27, 'Spectra Consultants'),
            g.Sb(),
            g.Sb(),
            g.Ob(28, 'div', 27),
            g.Tb(29, 'div', 28),
            g.Tb(30, 'div', 29),
            g.Ac(31, 'Spectra Consultants Limited'),
            g.Sb(),
            g.Tb(32, 'div', 30),
            g.Ac(33, ' 2nd Floor, Suite 5, The Avenue, Beacon Court, Sandyford, Dublin 18 '),
            g.Sb(),
            g.Tb(34, 'div', 31),
            g.Tb(35, 'span'),
            g.Ac(36, 'Phone:'),
            g.Sb(),
            g.Ac(37, ' +353 1 2149727'),
            g.Sb(),
            g.Tb(38, 'div', 32),
            g.Tb(39, 'span'),
            g.Ac(40, 'Email:'),
            g.Sb(),
            g.Ac(41, ' info@prima.ie'),
            g.Sb(),
            g.Tb(42, 'div', 33),
            g.Tb(43, 'span'),
            g.Ac(44, 'VAT #:'),
            g.Sb(),
            g.Ac(45, ' IE3550058HH'),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Tb(46, 'table', 36),
            g.Tb(47, 'tr', 37),
            g.Tb(48, 'td', 35),
            g.Ac(49, 'INVOICE'),
            g.Sb(),
            g.Tb(50, 'td', 38),
            g.Ac(51),
            g.fc(52, 'async'),
            g.Sb(),
            g.Sb(),
            g.Tb(53, 'tr'),
            g.Tb(54, 'td', 35),
            g.Ac(55, 'INVOICE DATE'),
            g.Sb(),
            g.Tb(56, 'td', 38),
            g.Ac(57, 'Dec 15, 2021'),
            g.Sb(),
            g.Sb(),
            g.Tb(58, 'tr'),
            g.Tb(59, 'td', 35),
            g.Ac(60, 'TOTAL DUE'),
            g.Sb(),
            g.Tb(61, 'td', 38),
            g.Ac(62),
            g.fc(63, 'currency'),
            g.fc(64, 'async'),
            g.fc(65, 'async'),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Tb(66, 'table', 39),
            g.Tb(67, 'thead'),
            g.Tb(68, 'tr'),
            g.Tb(69, 'th', 40),
            g.Ac(70, ' SERVICE '),
            g.Sb(),
            g.Tb(71, 'th', 41),
            g.Ac(72, ' UNIT '),
            g.Sb(),
            g.Tb(73, 'th', 41),
            g.Ac(74, ' PRICE '),
            g.Sb(),
            g.Tb(75, 'th', 42),
            g.Ac(76, ' QUANTITY '),
            g.Sb(),
            g.Tb(77, 'th', 42),
            g.Ac(78, ' TOTAL '),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Tb(79, 'tbody'),
            g.zc(80, s, 17, 12, 'tr', 43),
            g.fc(81, 'keyvalue'),
            g.fc(82, 'async'),
            g.Sb(),
            g.Sb(),
            g.Tb(83, 'table', 44),
            g.Tb(84, 'tbody'),
            g.Tb(85, 'tr', 45),
            g.Tb(86, 'td'),
            g.Ac(87, 'SUBTOTAL'),
            g.Sb(),
            g.Tb(88, 'td', 42),
            g.Ac(89),
            g.fc(90, 'currency'),
            g.fc(91, 'async'),
            g.fc(92, 'async'),
            g.Sb(),
            g.Sb(),
            g.Tb(93, 'tr', 46),
            g.Tb(94, 'td'),
            g.Ac(95, 'VAT (0%)'),
            g.Sb(),
            g.Tb(96, 'td', 42),
            g.Ac(97),
            g.fc(98, 'currency'),
            g.fc(99, 'async'),
            g.fc(100, 'async'),
            g.Sb(),
            g.Sb(),
            g.Tb(101, 'tr', 47),
            g.Tb(102, 'td'),
            g.Ac(103, 'TOTAL'),
            g.Sb(),
            g.Tb(104, 'td', 42),
            g.Ac(105),
            g.fc(106, 'currency'),
            g.fc(107, 'async'),
            g.fc(108, 'async'),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Tb(109, 'div', 48),
            g.Tb(110, 'table', 49),
            g.Tb(111, 'tbody'),
            g.Tb(112, 'tr'),
            g.Tb(113, 'td', 50),
            g.Tb(114, 'b'),
            g.Ac(115, 'Payment'),
            g.Sb(),
            g.Ob(116, 'br'),
            g.Ob(117, 'br'),
            g.Ac(118, ' Please pay via bank transfer using the following details. '),
            g.Ob(119, 'br'),
            g.Ob(120, 'br'),
            g.Tb(121, 'div'),
            g.Ac(122, ' IBAN: SE0597700000010001208858 '),
            g.Ob(123, 'br'),
            g.Ac(124, ' BIC: FTCS SE SS '),
            g.Ob(125, 'br'),
            g.Sb(),
            g.Sb(),
            g.Tb(126, 'td', 50),
            g.Tb(127, 'b'),
            g.Ac(128, 'Company Information'),
            g.Sb(),
            g.Ob(129, 'br'),
            g.Ob(130, 'br'),
            g.Ac(131, ' Company Reg #: C100255 '),
            g.Ob(132, 'br'),
            g.Ob(133, 'br'),
            g.Ac(134, ' Thanks for your business. '),
            g.Sb(),
            g.Tb(135, 'td', 51),
            g.Ob(136, 'img', 52),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Sb(),
            g.Sb()),
          2 & n)
        ) {
          const n = g.ec();
          var e,
            o = null;
          const t = g.gc(81, 15, null == (e = g.gc(82, 17, n.dom.invoice)) ? null : e.charges);
          var c = null,
            i = null,
            r = null;
          g.Ab(51),
            g.Cc(' ', g.gc(52, 6, n.dom.invoice).title, ' '),
            g.Ab(11),
            g.Cc(
              ' ',
              g.hc(
                63,
                8,
                n.getTotalDays(null == (o = g.gc(64, 11, n.dom.invoice)) ? null : o.charges) *
                  (null == (o = g.gc(65, 13, n.dom.invoice)) ? null : o.rate) *
                  1.0,
                '\u20ac'
              ),
              ' '
            ),
            g.Ab(18),
            g.lc('ngForOf', t),
            g.Ab(9),
            g.Cc(
              ' ',
              g.hc(
                90,
                19,
                n.getTotalDays(null == (c = g.gc(91, 22, n.dom.invoice)) ? null : c.charges) *
                  (null == (c = g.gc(92, 24, n.dom.invoice)) ? null : c.rate),
                '\u20ac'
              ),
              ' '
            ),
            g.Ab(8),
            g.Cc(
              ' ',
              g.hc(
                98,
                26,
                n.getTotalDays(null == (i = g.gc(99, 29, n.dom.invoice)) ? null : i.charges) *
                  (null == (i = g.gc(100, 31, n.dom.invoice)) ? null : i.rate) *
                  0.0,
                '\u20ac'
              ),
              ' '
            ),
            g.Ab(8),
            g.Cc(
              ' ',
              g.hc(
                106,
                33,
                n.getTotalDays(null == (r = g.gc(107, 36, n.dom.invoice)) ? null : r.charges) *
                  (null == (r = g.gc(108, 38, n.dom.invoice)) ? null : r.rate) *
                  1.0,
                '\u20ac'
              ),
              ' '
            );
        }
      }
      function _(n, t) {
        if (
          (1 & n &&
            (g.Tb(0, 'div', 58),
            g.Tb(1, 'span', 59),
            g.Ac(2),
            g.fc(3, 'async'),
            g.Tb(4, 'sup', 60),
            g.Ac(5, 'HRS'),
            g.Sb(),
            g.Sb(),
            g.Tb(6, 'span'),
            g.Ac(7),
            g.fc(8, 'date'),
            g.Sb(),
            g.Sb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = g.ec(2);
          g.Ab(2), g.Bc(g.gc(3, 2, e.dom.timesheet)[n]), g.Ab(5), g.Bc(g.hc(8, 4, n, 'dd'));
        }
      }
      function O(n, t) {
        if (
          (1 & n &&
            (g.Tb(0, 'div', 58),
            g.Tb(1, 'span', 59),
            g.Ac(2),
            g.fc(3, 'async'),
            g.Tb(4, 'sup', 60),
            g.Ac(5, 'HRS'),
            g.Sb(),
            g.Sb(),
            g.Tb(6, 'span'),
            g.Ac(7),
            g.fc(8, 'date'),
            g.Sb(),
            g.Sb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = g.ec(2);
          g.Ab(2), g.Bc(g.gc(3, 2, e.dom.timesheet)[n]), g.Ab(5), g.Bc(g.hc(8, 4, n, 'dd'));
        }
      }
      function C(n, t) {
        if (
          (1 & n &&
            (g.Tb(0, 'div', 58),
            g.Tb(1, 'span', 59),
            g.Ac(2),
            g.fc(3, 'async'),
            g.Tb(4, 'sup', 60),
            g.Ac(5, 'HRS'),
            g.Sb(),
            g.Sb(),
            g.Tb(6, 'span'),
            g.Ac(7),
            g.fc(8, 'date'),
            g.Sb(),
            g.Sb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = g.ec(2);
          g.Ab(2), g.Bc(g.gc(3, 2, e.dom.timesheet)[n]), g.Ab(5), g.Bc(g.hc(8, 4, n, 'dd'));
        }
      }
      function f(n, t) {
        if (
          (1 & n &&
            (g.Tb(0, 'div', 58),
            g.Tb(1, 'span', 59),
            g.Ac(2),
            g.fc(3, 'async'),
            g.Tb(4, 'sup', 60),
            g.Ac(5, 'HRS'),
            g.Sb(),
            g.Sb(),
            g.Tb(6, 'span'),
            g.Ac(7),
            g.fc(8, 'date'),
            g.Sb(),
            g.Sb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = g.ec(2);
          g.Ab(2), g.Bc(g.gc(3, 2, e.dom.timesheet)[n]), g.Ab(5), g.Bc(g.hc(8, 4, n, 'dd'));
        }
      }
      function M(n, t) {
        if (
          (1 & n &&
            (g.Tb(0, 'div', 58),
            g.Tb(1, 'span', 59),
            g.Ac(2),
            g.fc(3, 'async'),
            g.Tb(4, 'sup', 60),
            g.Ac(5, 'HRS'),
            g.Sb(),
            g.Sb(),
            g.Tb(6, 'span'),
            g.Ac(7),
            g.fc(8, 'date'),
            g.Sb(),
            g.Sb()),
          2 & n)
        ) {
          const n = t.$implicit,
            e = g.ec(2);
          g.Ab(2), g.Bc(g.gc(3, 2, e.dom.timesheet)[n]), g.Ab(5), g.Bc(g.hc(8, 4, n, 'dd'));
        }
      }
      function P(n, t) {
        if (
          (1 & n &&
            (g.Tb(0, 'div', 53),
            g.Tb(1, 'div', 54),
            g.Tb(2, 'h1'),
            g.Ac(3),
            g.fc(4, 'date'),
            g.fc(5, 'async'),
            g.Tb(6, 'button'),
            g.Ac(7, '\u25be'),
            g.Sb(),
            g.Sb(),
            g.Tb(8, 'p'),
            g.Ac(9),
            g.fc(10, 'date'),
            g.fc(11, 'async'),
            g.Sb(),
            g.Sb(),
            g.Tb(12, 'div', 55),
            g.Tb(13, 'span', 56),
            g.Ac(14, 'Sun'),
            g.Sb(),
            g.Tb(15, 'span', 56),
            g.Ac(16, 'Mon'),
            g.Sb(),
            g.Tb(17, 'span', 56),
            g.Ac(18, 'Tue'),
            g.Sb(),
            g.Tb(19, 'span', 56),
            g.Ac(20, 'Wed'),
            g.Sb(),
            g.Tb(21, 'span', 56),
            g.Ac(22, 'Thu'),
            g.Sb(),
            g.Tb(23, 'span', 56),
            g.Ac(24, 'Fri'),
            g.Sb(),
            g.Tb(25, 'span', 56),
            g.Ac(26, 'Sat'),
            g.Sb(),
            g.zc(27, _, 9, 7, 'div', 57),
            g.fc(28, 'async'),
            g.zc(29, O, 9, 7, 'div', 57),
            g.fc(30, 'async'),
            g.zc(31, C, 9, 7, 'div', 57),
            g.fc(32, 'async'),
            g.zc(33, f, 9, 7, 'div', 57),
            g.fc(34, 'async'),
            g.zc(35, M, 9, 7, 'div', 57),
            g.fc(36, 'async'),
            g.Sb(),
            g.Sb()),
          2 & n)
        ) {
          const n = g.ec();
          var e, o;
          g.Ab(3),
            g.Cc(' ', g.hc(4, 7, null == (e = g.gc(5, 10, n.dom.range)) ? null : e.from, 'MMMM'), ' '),
            g.Ab(6),
            g.Bc(g.hc(10, 12, null == (o = g.gc(11, 15, n.dom.range)) ? null : o.from, 'yyyy')),
            g.Ab(18),
            g.lc('ngForOf', g.gc(28, 17, n.dom.calendar)[0].days),
            g.Ab(2),
            g.lc('ngForOf', g.gc(30, 19, n.dom.calendar)[1].days),
            g.Ab(2),
            g.lc('ngForOf', g.gc(32, 21, n.dom.calendar)[2].days),
            g.Ab(2),
            g.lc('ngForOf', g.gc(34, 23, n.dom.calendar)[3].days),
            g.Ab(2),
            g.lc('ngForOf', g.gc(36, 25, n.dom.calendar)[4].days);
        }
      }
      const v = function (n) {
        return { 'invoice__wrapper--fullscreen': n };
      };
      let h = (() => {
          class n {
            constructor(n) {
              (this.store = n),
                (this.dom = {
                  fullscreen: !1,
                  views: { selected: 'invoice' },
                  range: this.store
                    .select('ui')
                    .pipe(Object(r.a)((n) => ({ from: n.invoice.draft.dateFrom, to: n.invoice.draft.dateTo }))),
                  invoice: this.store.select('ui').pipe(Object(r.a)((n) => n.invoice.draft)),
                  calendar: this.store.select('ui').pipe(
                    Object(r.a)((n) => {
                      const t = [],
                        e = d()(n.invoice.draft.dateFrom).month(),
                        o = d()(n.invoice.draft.dateFrom).year();
                      let c = d.a.utc(o + '-' + (e + 1) + '-01Z').startOf('week');
                      for (let i = 0; i < 5; i++)
                        i && (c = d()(c).add(1, 'weeks')),
                          t.push({
                            week: d()(c).week(),
                            days: Array(7)
                              .fill(0)
                              .map((n, t) =>
                                d()(c)
                                  .startOf('week')
                                  .clone()
                                  .add(n + t, 'day')
                                  .format('YYYY-MM-DD')
                              ),
                          });
                      return t;
                    })
                  ),
                  timesheet: this.store.select('ui').pipe(
                    Object(r.a)((n) => {
                      const t = {};
                      return (
                        n.invoice.draft.logs.forEach((n) => {
                          const e = n.date;
                          t[e] ? (t[e] += Number(n.hours)) : (t[e] = Number(n.hours));
                        }),
                        t
                      );
                    })
                  ),
                });
            }
            saveEditable(n) {
              console.log(n);
            }
            getTotalDays(n) {
              let t = 0;
              for (const e in n) n[e] && (t += n[e].days);
              return t;
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(g.Nb(b.a));
            }),
            (n.ɵcmp = g.Hb({
              type: n,
              selectors: [['app-invoice']],
              decls: 5,
              vars: 6,
              consts: [
                [1, 'invoice__wrapper', 3, 'ngClass'],
                [1, 'container'],
                [4, 'ngIf'],
                ['class', 'invoice-card', 4, 'ngIf'],
                ['class', 'calendar-container', 4, 'ngIf'],
                [1, 'row', 2, 'margin-top', '30px'],
                [1, 'col-md-4'],
                [1, 'btn', 'primary', 3, 'click'],
                [1, 'icon-plus'],
                [3, 'click'],
                [1, 'icon-bills'],
                [1, 'icon-calendar'],
                [1, 'col-md-8'],
                [1, 'input-group', 'md-form', 'form-sm', 'form-2', 'pl-0'],
                [
                  'type',
                  'text',
                  'placeholder',
                  'Search',
                  'aria-label',
                  'Search',
                  1,
                  'form-control',
                  'my-0',
                  'py-1',
                  'lime-border',
                ],
                [1, 'input-group-append'],
                ['id', 'basic-text1', 1, 'input-group-text', 'lime', 'lighten-2'],
                ['aria-hidden', 'true', 1, 'icon-search'],
                [1, 'row'],
                [1, 'col-md-12'],
                [
                  2,
                  'display',
                  'block',
                  'height',
                  '1px',
                  'width',
                  '100%',
                  'background',
                  '#f0f0f0',
                  'margin',
                  '30px 0px',
                ],
                [1, 'invoice-card'],
                [1, 'header'],
                [1, 'ids'],
                [
                  1,
                  'seller',
                  2,
                  'flex-direction',
                  'row',
                  'box-sizing',
                  'border-box',
                  'display',
                  'flex',
                  'place-content',
                  'center flex-start',
                  'align-items',
                  'center',
                ],
                [1, 'logo'],
                ['src', './assets/img/axier_logo.png'],
                [1, 'divider'],
                [1, 'detail'],
                [1, 'title'],
                [1, 'address'],
                [1, 'phone'],
                [1, 'email'],
                [1, 'website'],
                [1, 'client'],
                [1, 'label'],
                [1, 'summary'],
                [1, 'code'],
                [1, 'value'],
                ['cellpadding', '0', 'cellspacing', '0', 1, 'modern'],
                [1, 'text-left'],
                [1, 'text-center'],
                [1, 'text-right'],
                [4, 'ngFor', 'ngForOf'],
                [1, 'invoice-table-footer'],
                [1, 'subtotal'],
                [1, 'vat'],
                [1, 'total'],
                [1, 'footer'],
                [1, 'doc__footer'],
                [2, 'width', '40%'],
                [1, 'text-right', 2, 'vertical-align', 'middle'],
                ['src', './assets/img/axier_logo.png', 2, 'width', '82px'],
                [1, 'calendar-container'],
                [1, 'calendar-header'],
                [1, 'calendar'],
                [1, 'day-name'],
                [
                  'class',
                  'day',
                  'ng-class',
                  "vm.fns.isDayDisabled(12, day) ? 'day--disabled' : ''",
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                ['ng-class', "vm.fns.isDayDisabled(12, day) ? 'day--disabled' : ''", 1, 'day'],
                [1, 'day--hours'],
                ['ng-if', '(dom.timesheet | async)[day]'],
              ],
              template: function (n, t) {
                1 & n &&
                  (g.Tb(0, 'div', 0),
                  g.Tb(1, 'div', 1),
                  g.zc(2, l, 20, 0, 'div', 2),
                  g.zc(3, p, 137, 40, 'div', 3),
                  g.zc(4, P, 37, 27, 'div', 4),
                  g.Sb(),
                  g.Sb()),
                  2 & n &&
                    (g.lc('ngClass', g.nc(4, v, t.dom.fullscreen)),
                    g.Ab(2),
                    g.lc('ngIf', !t.dom.fullscreen),
                    g.Ab(1),
                    g.lc('ngIf', 'invoice' === t.dom.views.selected),
                    g.Ab(1),
                    g.lc('ngIf', 'timesheet' === t.dom.views.selected));
              },
              directives: [o.m, o.o, o.n],
              pipes: [o.b, o.d, o.i, o.f],
              styles: [
                '.invoice__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow-y:auto;width:100%;color:#1e2058}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]{position:fixed;top:0;left:0;background:#fff;height:100%;display:block;width:1000px;z-index:20}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]{box-shadow:none;margin:0;padding:0;width:100%;max-width:100%;min-width:100%}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:160px;font-size:11px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]{margin-bottom:30px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:80px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{margin:0 23px;height:144px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{width:80px;font-size:10px;font-weight:900}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]{font-size:13px;margin-top:20px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:13px 0;font-weight:600}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{padding-left:0}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:18px 0;font-size:14px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   table.invoice-table-footer[_ngcontent-%COMP%]{margin:13px 0 16px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   table.invoice-table-footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:22px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   table.invoice-table-footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-bottom:15px;font-size:14px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .doc__footer[_ngcontent-%COMP%]{color:#1e2058;font-size:11px;margin-top:95px}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .doc__footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;vertical-align:top}.invoice__wrapper.invoice__wrapper--fullscreen[_ngcontent-%COMP%]   .invoice-card[_ngcontent-%COMP%]   .doc__footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{text-transform:uppercase}.invoice-card[_ngcontent-%COMP%]{margin:20px;width:1020px;min-width:1020px;max-width:1020px;padding:88px;overflow:hidden;background:#fff}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;place-content:flex-start space-between;align-items:flex-start}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:305px;font-size:15px;font-family:Avenir LT Std}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-family:Avenir LT Std;color:#1e2058}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{font-size:35px;font-weight:300}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-bottom:32px}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:rgba(0,0,0,.12);text-align:right;padding-right:16px}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]{flex-direction:column;box-sizing:border-box;display:flex;line-height:22px;color:#1e2058;color:#b7b7b7}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:200px;font-size:14px;font-family:Poppins}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;place-content:center flex-start;align-items:center;margin-bottom:80px}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:156px}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:1px;margin:0 48px;background-color:rgba(0,0,0,.12);height:144px}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;place-content:center flex-start;align-items:center}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]:hover{border:1px solid red}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:1px;margin:0 48px;background-color:rgba(0,0,0,.12);height:144px}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;place-content:center center;align-items:center;width:156px;font-size:18px;letter-spacing:1px;font-weight:300;text-transform:uppercase}.invoice-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center}.invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]{font-size:15px;color:#1e2058;width:100%;margin-top:30px}.invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#1e2058;border-bottom:1px solid rgba(0,0,0,.12);padding:16px 8px;font-weight:600;white-space:nowrap}.invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{padding-left:24px}.invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:16px 8px;border-bottom:1px solid rgba(0,0,0,.12)}.invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:17px}.invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{margin-top:8px;font-size:12px;color:#1e2058;max-width:360px}.invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .invoice-card[_ngcontent-%COMP%]   table.modern[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:24px}.invoice-card[_ngcontent-%COMP%]   table.invoice-table-footer[_ngcontent-%COMP%]{width:100%;border:none;border-spacing:0;text-align:left;margin:32px 0 96px}.invoice-card[_ngcontent-%COMP%]   table.invoice-table-footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:17px;font-weight:400;color:#1e2058;border-bottom:none;padding:8px}.invoice-card[_ngcontent-%COMP%]   table.invoice-table-footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:32px 8px;border-top:1px solid rgba(0,0,0,.12);font-size:35px;font-weight:300}.invoice-card[_ngcontent-%COMP%]   table.invoice-table-footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.vat[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .invoice-card[_ngcontent-%COMP%]   table.invoice-table-footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-bottom:32px}.invoice-card[_ngcontent-%COMP%]   .doc__footer[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;border-collapse:collapse;border-spacing:0;font-family:Poppins;color:rgba(0,0,0,.54);font-size:14px}.invoice-card[_ngcontent-%COMP%]   .doc__footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;vertical-align:top}.invoice-card[_ngcontent-%COMP%]   .doc__footer[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{text-transform:uppercase}',
                ".calendar[_ngcontent-%COMP%]{display:grid;width:100%;grid-template-columns:repeat(7,minmax(120px,1fr));grid-template-rows:50px;grid-auto-rows:120px;overflow:auto}.calendar-container[_ngcontent-%COMP%]{width:90%;overflow:hidden;box-shadow:0 2px 20px rgba(0,0,0,.1);border-radius:10px;background:#fff;max-width:1200px;margin:30px auto auto}.calendar-header[_ngcontent-%COMP%]{text-align:center;padding:20px 0;background:linear-gradient(180deg,#fafbfd 0,hsla(0,0%,100%,0));border-bottom:1px solid rgba(166,168,179,.12)}.calendar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:18px}.calendar-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;font-size:13px;font-weight:600;color:rgba(81,86,93,.4)}.calendar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:0;border:0;padding:0;color:rgba(81,86,93,.7);cursor:pointer;outline:0}.day[_ngcontent-%COMP%]{border-bottom:1px solid rgba(166,168,179,.12);border-right:1px solid rgba(166,168,179,.12);text-align:right;padding:14px 20px;letter-spacing:1px;font-size:12px;box-sizing:border-box;color:#98a0a6;position:relative;pointer-events:none;z-index:1}.day[_ngcontent-%COMP%]:nth-of-type(7n+7){border-right:0}.day[_ngcontent-%COMP%]:nth-of-type(n+1):nth-of-type(-n+7){grid-row:2}.day[_ngcontent-%COMP%]:nth-of-type(n+8):nth-of-type(-n+14){grid-row:3}.day[_ngcontent-%COMP%]:nth-of-type(n+15):nth-of-type(-n+21){grid-row:4}.day[_ngcontent-%COMP%]:nth-of-type(n+22):nth-of-type(-n+28){grid-row:5}.day[_ngcontent-%COMP%]:nth-of-type(n+29):nth-of-type(-n+35){grid-row:6}.day[_ngcontent-%COMP%]:nth-of-type(7n+1){grid-column:1/1}.day[_ngcontent-%COMP%]:nth-of-type(7n+2){grid-column:2/2}.day[_ngcontent-%COMP%]:nth-of-type(7n+3){grid-column:3/3}.day[_ngcontent-%COMP%]:nth-of-type(7n+4){grid-column:4/4}.day[_ngcontent-%COMP%]:nth-of-type(7n+5){grid-column:5/5}.day[_ngcontent-%COMP%]:nth-of-type(7n+6){grid-column:6/6}.day[_ngcontent-%COMP%]:nth-of-type(7n+7){grid-column:7/7}.day-name[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase;color:#99a1a7;text-align:center;border-bottom:1px solid rgba(166,168,179,.12);line-height:50px;font-weight:500}.day--disabled[_ngcontent-%COMP%]{color:rgba(152,160,166,.6);background-color:#fff;background-image:url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9f9fa' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\");cursor:not-allowed}.day--hours[_ngcontent-%COMP%]{position:absolute;bottom:11px;left:20px;font-size:23px;color:rgba(0,0,0,.87)}.day--hours[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{top:-5px;font-size:10px;font-weight:600}.task[_ngcontent-%COMP%]{border-left-width:3px;padding:8px 12px;margin:10px;border-left-style:solid;font-size:14px;position:relative}.task--warning[_ngcontent-%COMP%]{border-left-color:#fdb44d;grid-column:4/span 3;grid-row:3;background:#fef0db;align-self:center;color:#fc9b10;margin-top:-5px}.task--danger[_ngcontent-%COMP%]{border-left-color:#fa607e;grid-column:2/span 3;grid-row:3;background:rgba(253,197,208,.7);color:#f8254e}.task--danger[_ngcontent-%COMP%], .task--info[_ngcontent-%COMP%]{margin-top:15px;align-self:end}.task--info[_ngcontent-%COMP%]{border-left-color:#4786ff;grid-column:6/span 2;grid-row:5;background:rgba(218,231,255,.7);color:#0a5eff}.task--primary[_ngcontent-%COMP%]{background:#4786ff;border:0;border-radius:4px;grid-column:3/span 3;grid-row:4;align-self:end;color:#fff;box-shadow:0 10px 14px rgba(71,134,255,.4)}.task__detail[_ngcontent-%COMP%]{position:absolute;left:0;top:calc(100% + 10px);background:#fff;border:1px solid rgba(166,168,179,.2);color:#000;padding:20px;box-sizing:border-box;border-radius:4px;box-shadow:0 10px 40px rgba(0,0,0,.08);z-index:2}.task__detail[_ngcontent-%COMP%]:after, .task__detail[_ngcontent-%COMP%]:before{bottom:100%;left:30%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.task__detail[_ngcontent-%COMP%]:before{border-bottom-color:rgba(166,168,179,.2);border-width:8px;margin-left:-8px}.task__detail[_ngcontent-%COMP%]:after{border-bottom-color:#fff;border-width:6px;margin-left:-6px}.task__detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:15px;margin:0;color:#51565d}.task__detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:4px;font-size:12px;margin-bottom:0;font-weight:500;color:rgba(81,86,93,.7)}",
              ],
            })),
            n
          );
        })(),
        m = (() => {
          class n {}
          return (
            (n.ɵmod = g.Lb({ type: n })),
            (n.ɵinj = g.Kb({
              factory: function (t) {
                return new (t || n)();
              },
              imports: [[o.c, i.a, c.h.forChild([{ path: '', component: h }])]],
            })),
            n
          );
        })();
    },
  },
]);
