!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], e)
    : e((t = t || self).firebase)
})(this, function (Xl) {
  "use strict"
  try {
    ;(function () {
      ;(Xl =
        Xl && Object.prototype.hasOwnProperty.call(Xl, "default")
          ? Xl.default
          : Xl),
        function () {
          var t,
            o =
              "function" == typeof Object.defineProperties
                ? Object.defineProperty
                : function (t, e, n) {
                    t != Array.prototype &&
                      t != Object.prototype &&
                      (t[e] = n.value)
                  }
          var a = (function (t) {
            t = [
              "object" == typeof window && window,
              "object" == typeof self && self,
              "object" == typeof global && global,
              t,
            ]
            for (var e = 0; e < t.length; ++e) {
              var n = t[e]
              if (n && n.Math == Math) return n
            }
            return globalThis
          })(this)
          function c(t) {
            var e,
              n,
              i =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                t[Symbol.iterator]
            return i
              ? i.call(t)
              : {
                  next:
                    ((e = t),
                    (n = 0),
                    function () {
                      return n < e.length
                        ? { done: !1, value: e[n++] }
                        : { done: !0 }
                    }),
                }
          }
          !(function (t, e) {
            if (e) {
              var n = a
              t = t.split(".")
              for (var i = 0; i < t.length - 1; i++) {
                var r = t[i]
                r in n || (n[r] = {}), (n = n[r])
              }
              ;(e = e((i = n[(t = t[t.length - 1])]))) != i &&
                null != e &&
                o(n, t, { configurable: !0, writable: !0, value: e })
            }
          })("Promise", function (t) {
            function s(t) {
              ;(this.b = 0), (this.c = void 0), (this.a = [])
              var e = this.f()
              try {
                t(e.resolve, e.reject)
              } catch (t) {
                e.reject(t)
              }
            }
            function e() {
              this.a = null
            }
            function u(e) {
              return e instanceof s
                ? e
                : new s(function (t) {
                    t(e)
                  })
            }
            if (t) return t
            e.prototype.b = function (t) {
              if (null == this.a) {
                this.a = []
                var e = this
                this.c(function () {
                  e.g()
                })
              }
              this.a.push(t)
            }
            var n = a.setTimeout
            ;(e.prototype.c = function (t) {
              n(t, 0)
            }),
              (e.prototype.g = function () {
                for (; this.a && this.a.length; ) {
                  var t = this.a
                  this.a = []
                  for (var e = 0; e < t.length; ++e) {
                    var n = t[e]
                    t[e] = null
                    try {
                      n()
                    } catch (t) {
                      this.f(t)
                    }
                  }
                }
                this.a = null
              }),
              (e.prototype.f = function (t) {
                this.c(function () {
                  throw t
                })
              }),
              (s.prototype.f = function () {
                function t(e) {
                  return function (t) {
                    i || ((i = !0), e.call(n, t))
                  }
                }
                var n = this,
                  i = !1
                return { resolve: t(this.m), reject: t(this.g) }
              }),
              (s.prototype.m = function (t) {
                if (t === this)
                  this.g(new TypeError("A Promise cannot resolve to itself"))
                else if (t instanceof s) this.s(t)
                else {
                  t: switch (typeof t) {
                    case "object":
                      var e = null != t
                      break t
                    case "function":
                      e = !0
                      break t
                    default:
                      e = !1
                  }
                  e ? this.u(t) : this.h(t)
                }
              }),
              (s.prototype.u = function (t) {
                var e = void 0
                try {
                  e = t.then
                } catch (t) {
                  return void this.g(t)
                }
                "function" == typeof e ? this.w(e, t) : this.h(t)
              }),
              (s.prototype.g = function (t) {
                this.i(2, t)
              }),
              (s.prototype.h = function (t) {
                this.i(1, t)
              }),
              (s.prototype.i = function (t, e) {
                if (0 != this.b)
                  throw Error(
                    "Cannot settle(" +
                      t +
                      ", " +
                      e +
                      "): Promise already settled in state" +
                      this.b
                  )
                ;(this.b = t), (this.c = e), this.l()
              }),
              (s.prototype.l = function () {
                if (null != this.a) {
                  for (var t = 0; t < this.a.length; ++t) r.b(this.a[t])
                  this.a = null
                }
              })
            var r = new e()
            return (
              (s.prototype.s = function (t) {
                var e = this.f()
                t.Oa(e.resolve, e.reject)
              }),
              (s.prototype.w = function (t, e) {
                var n = this.f()
                try {
                  t.call(e, n.resolve, n.reject)
                } catch (t) {
                  n.reject(t)
                }
              }),
              (s.prototype.then = function (t, e) {
                function n(e, t) {
                  return "function" == typeof e
                    ? function (t) {
                        try {
                          i(e(t))
                        } catch (t) {
                          r(t)
                        }
                      }
                    : t
                }
                var i,
                  r,
                  o = new s(function (t, e) {
                    ;(i = t), (r = e)
                  })
                return this.Oa(n(t, i), n(e, r)), o
              }),
              (s.prototype.catch = function (t) {
                return this.then(void 0, t)
              }),
              (s.prototype.Oa = function (t, e) {
                function n() {
                  switch (i.b) {
                    case 1:
                      t(i.c)
                      break
                    case 2:
                      e(i.c)
                      break
                    default:
                      throw Error("Unexpected state: " + i.b)
                  }
                }
                var i = this
                null == this.a ? r.b(n) : this.a.push(n)
              }),
              (s.resolve = u),
              (s.reject = function (n) {
                return new s(function (t, e) {
                  e(n)
                })
              }),
              (s.race = function (r) {
                return new s(function (t, e) {
                  for (var n = c(r), i = n.next(); !i.done; i = n.next())
                    u(i.value).Oa(t, e)
                })
              }),
              (s.all = function (t) {
                var o = c(t),
                  a = o.next()
                return a.done
                  ? u([])
                  : new s(function (n, t) {
                      function e(e) {
                        return function (t) {
                          ;(i[e] = t), 0 == --r && n(i)
                        }
                      }
                      for (
                        var i = [], r = 0;
                        i.push(void 0),
                          r++,
                          u(a.value).Oa(e(i.length - 1), t),
                          !(a = o.next()).done;

                      );
                    })
              }),
              s
            )
          })
          var u = u || {},
            l = this || self,
            f = /^[\w+/_-]+[=]{0,2}$/,
            d = null
          function s() {}
          function n(t) {
            var e = typeof t
            if ("object" == e) {
              if (!t) return "null"
              if (t instanceof Array) return "array"
              if (t instanceof Object) return e
              var n = Object.prototype.toString.call(t)
              if ("[object Window]" == n) return "object"
              if (
                "[object Array]" == n ||
                ("number" == typeof t.length &&
                  void 0 !== t.splice &&
                  void 0 !== t.propertyIsEnumerable &&
                  !t.propertyIsEnumerable("splice"))
              )
                return "array"
              if (
                "[object Function]" == n ||
                (void 0 !== t.call &&
                  void 0 !== t.propertyIsEnumerable &&
                  !t.propertyIsEnumerable("call"))
              )
                return "function"
            } else if ("function" == e && void 0 === t.call) return "object"
            return e
          }
          function h(t) {
            var e = n(t)
            return (
              "array" == e || ("object" == e && "number" == typeof t.length)
            )
          }
          function p(t) {
            return "function" == n(t)
          }
          function v(t) {
            var e = typeof t
            return ("object" == e && null != t) || "function" == e
          }
          var i = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
            r = 0
          function m(t, e, n) {
            return t.call.apply(t.bind, arguments)
          }
          function g(e, n, t) {
            if (!e) throw Error()
            if (2 < arguments.length) {
              var i = Array.prototype.slice.call(arguments, 2)
              return function () {
                var t = Array.prototype.slice.call(arguments)
                return Array.prototype.unshift.apply(t, i), e.apply(n, t)
              }
            }
            return function () {
              return e.apply(n, arguments)
            }
          }
          function b(t, e, n) {
            return (b =
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf("native code")
                ? m
                : g).apply(null, arguments)
          }
          function y(e, t) {
            var n = Array.prototype.slice.call(arguments, 1)
            return function () {
              var t = n.slice()
              return t.push.apply(t, arguments), e.apply(this, t)
            }
          }
          var w =
            Date.now ||
            function () {
              return +new Date()
            }
          function e(t, e) {
            function n() {}
            ;(n.prototype = e.prototype),
              (t.Za = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t)
          }
          function I(t, e, n) {
            ;(this.code = A + t),
              (this.message = e || k[t] || ""),
              (this.a = n || null)
          }
          function T(t) {
            var e = t && t.code
            return e
              ? new I(e.substring(A.length), t.message, t.serverResponse)
              : null
          }
          e(I, Error),
            (I.prototype.v = function () {
              var t = { code: this.code, message: this.message }
              return this.a && (t.serverResponse = this.a), t
            }),
            (I.prototype.toJSON = function () {
              return this.v()
            })
          var E,
            A = "auth/",
            k = {
              "admin-restricted-operation":
                "This operation is restricted to administrators only.",
              "argument-error": "",
              "app-not-authorized":
                "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
              "app-not-installed":
                "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
              "captcha-check-failed":
                "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
              "code-expired":
                "The SMS code has expired. Please re-send the verification code to try again.",
              "cordova-not-ready": "Cordova framework is not ready.",
              "cors-unsupported": "This browser is not supported.",
              "credential-already-in-use":
                "This credential is already associated with a different user account.",
              "custom-token-mismatch":
                "The custom token corresponds to a different audience.",
              "requires-recent-login":
                "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
              "dynamic-link-not-activated":
                "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
              "email-change-needs-verification":
                "Multi-factor users must always have a verified email.",
              "email-already-in-use":
                "The email address is already in use by another account.",
              "expired-action-code": "The action code has expired. ",
              "cancelled-popup-request":
                "This operation has been cancelled due to another conflicting popup being opened.",
              "internal-error": "An internal error has occurred.",
              "invalid-app-credential":
                "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
              "invalid-app-id":
                "The mobile app identifier is not registed for the current project.",
              "invalid-user-token":
                "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
              "invalid-auth-event": "An internal error has occurred.",
              "invalid-verification-code":
                "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
              "invalid-continue-uri":
                "The continue URL provided in the request is invalid.",
              "invalid-cordova-configuration":
                "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
              "invalid-custom-token":
                "The custom token format is incorrect. Please check the documentation.",
              "invalid-dynamic-link-domain":
                "The provided dynamic link domain is not configured or authorized for the current project.",
              "invalid-email": "The email address is badly formatted.",
              "invalid-api-key":
                "Your API key is invalid, please check you have copied it correctly.",
              "invalid-cert-hash":
                "The SHA-1 certificate hash provided is invalid.",
              "invalid-credential":
                "The supplied auth credential is malformed or has expired.",
              "invalid-message-payload":
                "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-multi-factor-session":
                "The request does not contain a valid proof of first factor successful sign-in.",
              "invalid-oauth-provider":
                "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
              "invalid-oauth-client-id":
                "The OAuth client ID provided is either invalid or does not match the specified API key.",
              "unauthorized-domain":
                "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
              "invalid-action-code":
                "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
              "wrong-password":
                "The password is invalid or the user does not have a password.",
              "invalid-persistence-type":
                "The specified persistence type is invalid. It can only be local, session or none.",
              "invalid-phone-number":
                "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
              "invalid-provider-id": "The specified provider ID is invalid.",
              "invalid-recipient-email":
                "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
              "invalid-sender":
                "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-verification-id":
                "The verification ID used to create the phone auth credential is invalid.",
              "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
              "multi-factor-info-not-found":
                "The user does not have a second factor matching the identifier provided.",
              "multi-factor-auth-required":
                "Proof of ownership of a second factor is required to complete sign-in.",
              "missing-android-pkg-name":
                "An Android Package Name must be provided if the Android App is required to be installed.",
              "auth-domain-config-required":
                "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
              "missing-app-credential":
                "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
              "missing-verification-code":
                "The phone auth credential was created with an empty SMS verification code.",
              "missing-continue-uri":
                "A continue URL must be provided in the request.",
              "missing-iframe-start": "An internal error has occurred.",
              "missing-ios-bundle-id":
                "An iOS Bundle ID must be provided if an App Store ID is provided.",
              "missing-multi-factor-info":
                "No second factor identifier is provided.",
              "missing-multi-factor-session":
                "The request is missing proof of first factor successful sign-in.",
              "missing-or-invalid-nonce":
                "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
              "missing-phone-number":
                "To send verification codes, provide a phone number for the recipient.",
              "missing-verification-id":
                "The phone auth credential was created with an empty verification ID.",
              "app-deleted": "This instance of FirebaseApp has been deleted.",
              "account-exists-with-different-credential":
                "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
              "network-request-failed":
                "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
              "no-auth-event": "An internal error has occurred.",
              "no-such-provider":
                "User was not linked to an account with the given provider.",
              "null-user":
                "A null user object was provided as the argument for an operation which requires a non-null user object.",
              "operation-not-allowed":
                "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
              "operation-not-supported-in-this-environment":
                'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
              "popup-blocked":
                "Unable to establish a connection with the popup. It may have been blocked by the browser.",
              "popup-closed-by-user":
                "The popup has been closed by the user before finalizing the operation.",
              "provider-already-linked":
                "User can only be linked to one identity for the given provider.",
              "quota-exceeded":
                "The project's quota for this operation has been exceeded.",
              "redirect-cancelled-by-user":
                "The redirect operation has been cancelled by the user before finalizing.",
              "redirect-operation-pending":
                "A redirect sign-in operation is already pending.",
              "rejected-credential":
                "The request contains malformed or mismatching credentials.",
              "second-factor-already-in-use":
                "The second factor is already enrolled on this account.",
              "maximum-second-factor-count-exceeded":
                "The maximum allowed number of second factors on a user has been exceeded.",
              "tenant-id-mismatch":
                "The provided tenant ID does not match the Auth instance's tenant ID",
              timeout: "The operation has timed out.",
              "user-token-expired":
                "The user's credential is no longer valid. The user must sign in again.",
              "too-many-requests":
                "We have blocked all requests from this device due to unusual activity. Try again later.",
              "unauthorized-continue-uri":
                "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
              "unsupported-first-factor":
                "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
              "unsupported-persistence-type":
                "The current environment does not support the specified persistence type.",
              "unsupported-tenant-operation":
                "This operation is not supported in a multi-tenant context.",
              "unverified-email": "The operation requires a verified email.",
              "user-cancelled":
                "The user did not grant your application the permissions it requested.",
              "user-not-found":
                "There is no user record corresponding to this identifier. The user may have been deleted.",
              "user-disabled":
                "The user account has been disabled by an administrator.",
              "user-mismatch":
                "The supplied credentials do not correspond to the previously signed in user.",
              "user-signed-out": "",
              "weak-password":
                "The password must be 6 characters long or more.",
              "web-storage-unsupported":
                "This browser is not supported or 3rd party cookies and data may be disabled.",
            },
            S = {
              hd: {
                Ra:
                  "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                Xa:
                  "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                Ua:
                  "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "b",
              },
              pd: {
                Ra:
                  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                Xa: "https://securetoken.googleapis.com/v1/token",
                Ua: "https://identitytoolkit.googleapis.com/v2/",
                id: "p",
              },
              rd: {
                Ra:
                  "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                Xa:
                  "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                Ua:
                  "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "s",
              },
              sd: {
                Ra:
                  "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                Xa: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                Ua: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "t",
              },
            }
          function N(t) {
            for (var e in S)
              if (S[e].id === t)
                return {
                  firebaseEndpoint: (t = S[e]).Ra,
                  secureTokenEndpoint: t.Xa,
                  identityPlatformEndpoint: t.Ua,
                }
            return null
          }
          function _(t) {
            if (t)
              try {
                return t.$goog_Thenable
              } catch (t) {
                return
              }
          }
          function O(t) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, O)
            else {
              var e = Error().stack
              e && (this.stack = e)
            }
            t && (this.message = String(t))
          }
          function R(t, e) {
            for (
              var n = "", i = (t = t.split("%s")).length - 1, r = 0;
              r < i;
              r++
            )
              n += t[r] + (r < e.length ? e[r] : "%s")
            O.call(this, n + t[i])
          }
          function C(t, e) {
            throw new R(
              "Failure" + (t ? ": " + t : ""),
              Array.prototype.slice.call(arguments, 1)
            )
          }
          function D(t, e) {
            ;(this.c = t), (this.f = e), (this.b = 0), (this.a = null)
          }
          function P(t, e) {
            t.f(e), t.b < 100 && (t.b++, (e.next = t.a), (t.a = e))
          }
          function L() {
            this.b = this.a = null
          }
          ;(E = N("__EID__") ? "__EID__" : void 0),
            e(O, Error),
            (O.prototype.name = "CustomError"),
            e(R, O),
            (R.prototype.name = "AssertionError"),
            (D.prototype.get = function () {
              if (0 < this.b) {
                this.b--
                var t = this.a
                ;(this.a = t.next), (t.next = null)
              } else t = this.c()
              return t
            })
          var M = new D(
            function () {
              return new x()
            },
            function (t) {
              t.reset()
            }
          )
          function x() {
            this.next = this.b = this.a = null
          }
          ;(L.prototype.add = function (t, e) {
            var n = M.get()
            n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n)
          }),
            (x.prototype.set = function (t, e) {
              ;(this.a = t), (this.b = e), (this.next = null)
            }),
            (x.prototype.reset = function () {
              this.next = this.b = this.a = null
            })
          var j = Array.prototype.indexOf
              ? function (t, e) {
                  return Array.prototype.indexOf.call(t, e, void 0)
                }
              : function (t, e) {
                  if ("string" == typeof t)
                    return "string" != typeof e || 1 != e.length
                      ? -1
                      : t.indexOf(e, 0)
                  for (var n = 0; n < t.length; n++)
                    if (n in t && t[n] === e) return n
                  return -1
                },
            U = Array.prototype.forEach
              ? function (t, e, n) {
                  Array.prototype.forEach.call(t, e, n)
                }
              : function (t, e, n) {
                  for (
                    var i = t.length,
                      r = "string" == typeof t ? t.split("") : t,
                      o = 0;
                    o < i;
                    o++
                  )
                    o in r && e.call(n, r[o], o, t)
                }
          var V = Array.prototype.filter
              ? function (t, e) {
                  return Array.prototype.filter.call(t, e, void 0)
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      i = [],
                      r = 0,
                      o = "string" == typeof t ? t.split("") : t,
                      a = 0;
                    a < n;
                    a++
                  )
                    if (a in o) {
                      var s = o[a]
                      e.call(void 0, s, a, t) && (i[r++] = s)
                    }
                  return i
                },
            F = Array.prototype.map
              ? function (t, e) {
                  return Array.prototype.map.call(t, e, void 0)
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      i = Array(n),
                      r = "string" == typeof t ? t.split("") : t,
                      o = 0;
                    o < n;
                    o++
                  )
                    o in r && (i[o] = e.call(void 0, r[o], o, t))
                  return i
                },
            q = Array.prototype.some
              ? function (t, e) {
                  return Array.prototype.some.call(t, e, void 0)
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      i = "string" == typeof t ? t.split("") : t,
                      r = 0;
                    r < n;
                    r++
                  )
                    if (r in i && e.call(void 0, i[r], r, t)) return !0
                  return !1
                }
          function H(t, e) {
            return 0 <= j(t, e)
          }
          function K(t, e) {
            var n
            return (
              (n = 0 <= (e = j(t, e))) && Array.prototype.splice.call(t, e, 1),
              n
            )
          }
          function G(n, i) {
            !(function (t, e) {
              for (
                var n = "string" == typeof t ? t.split("") : t,
                  i = t.length - 1;
                0 <= i;
                --i
              )
                i in n && e.call(void 0, n[i], i, t)
            })(n, function (t, e) {
              i.call(void 0, t, e, n) &&
                1 == Array.prototype.splice.call(n, e, 1).length &&
                0
            })
          }
          function B(t) {
            return Array.prototype.concat.apply([], arguments)
          }
          function W(t) {
            var e = t.length
            if (0 < e) {
              for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i]
              return n
            }
            return []
          }
          var X,
            J = String.prototype.trim
              ? function (t) {
                  return t.trim()
                }
              : function (t) {
                  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
                },
            Y = /&/g,
            z = /</g,
            $ = />/g,
            Z = /"/g,
            Q = /'/g,
            tt = /\x00/g,
            et = /[\x00&<>"']/
          function nt(t, e) {
            return -1 != t.indexOf(e)
          }
          function it(t, e) {
            return t < e ? -1 : e < t ? 1 : 0
          }
          t: {
            var rt = l.navigator
            if (rt) {
              var ot = rt.userAgent
              if (ot) {
                X = ot
                break t
              }
            }
            X = ""
          }
          function at(t) {
            return nt(X, t)
          }
          function st(t, e) {
            for (var n in t) e.call(void 0, t[n], n, t)
          }
          function ut(t) {
            for (var e in t) return
            return 1
          }
          function ct(t) {
            var e,
              n = {}
            for (e in t) n[e] = t[e]
            return n
          }
          var ht = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " "
          )
          function lt(t, e) {
            for (var n, i, r = 1; r < arguments.length; r++) {
              for (n in (i = arguments[r])) t[n] = i[n]
              for (var o = 0; o < ht.length; o++)
                (n = ht[o]),
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
          }
          function ft(t, e) {
            t: {
              try {
                var n = t && t.ownerDocument,
                  i = n && (n.defaultView || n.parentWindow)
                if ((i = i || l).Element && i.Location) {
                  var r = i
                  break t
                }
              } catch (t) {}
              r = null
            }
            if (
              r &&
              void 0 !== r[e] &&
              (!t ||
                (!(t instanceof r[e]) &&
                  (t instanceof r.Location || t instanceof r.Element)))
            ) {
              if (v(t))
                try {
                  var o =
                    t.constructor.displayName ||
                    t.constructor.name ||
                    Object.prototype.toString.call(t)
                } catch (t) {
                  o = "<object could not be stringified>"
                }
              else
                o = void 0 === t ? "undefined" : null === t ? "null" : typeof t
              C(
                "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                e,
                o
              )
            }
          }
          function dt(t, e) {
            ;(this.a = (t === mt && e) || ""), (this.b = vt)
          }
          function pt(t) {
            return t instanceof dt && t.constructor === dt && t.b === vt
              ? t.a
              : (C("expected object of type Const, got '" + t + "'"),
                "type_error:Const")
          }
          ;(dt.prototype.ra = !0),
            (dt.prototype.qa = function () {
              return this.a
            }),
            (dt.prototype.toString = function () {
              return "Const{" + this.a + "}"
            })
          var vt = {},
            mt = {},
            gt = new dt(mt, "")
          function bt(t, e) {
            ;(this.a = (t === At && e) || ""), (this.b = Et)
          }
          function yt(t) {
            return t instanceof bt && t.constructor === bt && t.b === Et
              ? t.a
              : (C(
                  "expected object of type TrustedResourceUrl, got '" +
                    t +
                    "' of type " +
                    n(t)
                ),
                "type_error:TrustedResourceUrl")
          }
          function wt(t, n) {
            var i = pt(t)
            if (!Tt.test(i))
              throw Error("Invalid TrustedResourceUrl format: " + i)
            return (
              (t = i.replace(It, function (t, e) {
                if (!Object.prototype.hasOwnProperty.call(n, e))
                  throw Error(
                    'Found marker, "' +
                      e +
                      '", in format string, "' +
                      i +
                      '", but no valid label mapping found in args: ' +
                      JSON.stringify(n)
                  )
                return (t = n[e]) instanceof dt
                  ? pt(t)
                  : encodeURIComponent(String(t))
              })),
              new bt(At, t)
            )
          }
          ;(bt.prototype.ra = !0),
            (bt.prototype.qa = function () {
              return this.a.toString()
            }),
            (bt.prototype.toString = function () {
              return "TrustedResourceUrl{" + this.a + "}"
            })
          var It = /%{(\w+)}/g,
            Tt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            Et = {},
            At = {}
          function kt(t, e) {
            ;(this.a = (t === Rt && e) || ""), (this.b = Ot)
          }
          function St(t) {
            return t instanceof kt && t.constructor === kt && t.b === Ot
              ? t.a
              : (C(
                  "expected object of type SafeUrl, got '" +
                    t +
                    "' of type " +
                    n(t)
                ),
                "type_error:SafeUrl")
          }
          ;(kt.prototype.ra = !0),
            (kt.prototype.qa = function () {
              return this.a.toString()
            }),
            (kt.prototype.toString = function () {
              return "SafeUrl{" + this.a + "}"
            })
          var Nt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
          function _t(t) {
            return t instanceof kt
              ? t
              : ((t = "object" == typeof t && t.ra ? t.qa() : String(t)),
                Nt.test(t) || (t = "about:invalid#zClosurez"),
                new kt(Rt, t))
          }
          var Ot = {},
            Rt = {}
          function Ct() {
            ;(this.a = ""), (this.b = Pt)
          }
          function Dt(t) {
            return t instanceof Ct && t.constructor === Ct && t.b === Pt
              ? t.a
              : (C(
                  "expected object of type SafeHtml, got '" +
                    t +
                    "' of type " +
                    n(t)
                ),
                "type_error:SafeHtml")
          }
          ;(Ct.prototype.ra = !0),
            (Ct.prototype.qa = function () {
              return this.a.toString()
            }),
            (Ct.prototype.toString = function () {
              return "SafeHtml{" + this.a + "}"
            })
          var Pt = {}
          function Lt(t) {
            var e = new Ct()
            return (e.a = t), e
          }
          Lt("<!DOCTYPE html>")
          var Mt = Lt("")
          function xt(t, e) {
            for (
              var n = t.split("%s"),
                i = "",
                r = Array.prototype.slice.call(arguments, 1);
              r.length && 1 < n.length;

            )
              i += n.shift() + r.shift()
            return i + n.join("%s")
          }
          function jt(t) {
            return (
              et.test(t) &&
                (-1 != t.indexOf("&") && (t = t.replace(Y, "&amp;")),
                -1 != t.indexOf("<") && (t = t.replace(z, "&lt;")),
                -1 != t.indexOf(">") && (t = t.replace($, "&gt;")),
                -1 != t.indexOf('"') && (t = t.replace(Z, "&quot;")),
                -1 != t.indexOf("'") && (t = t.replace(Q, "&#39;")),
                -1 != t.indexOf("\0") && (t = t.replace(tt, "&#0;"))),
              t
            )
          }
          function Ut(t) {
            return Ut[" "](t), t
          }
          Lt("<br>"), (Ut[" "] = s)
          var Vt,
            Ft,
            qt = at("Opera"),
            Ht = at("Trident") || at("MSIE"),
            Kt = at("Edge"),
            Gt = Kt || Ht,
            Bt =
              at("Gecko") &&
              !(nt(X.toLowerCase(), "webkit") && !at("Edge")) &&
              !(at("Trident") || at("MSIE")) &&
              !at("Edge"),
            Wt = nt(X.toLowerCase(), "webkit") && !at("Edge")
          function Xt() {
            var t = l.document
            return t ? t.documentMode : void 0
          }
          t: {
            var Jt = "",
              Yt =
                ((Ft = X),
                Bt
                  ? /rv:([^\);]+)(\)|;)/.exec(Ft)
                  : Kt
                  ? /Edge\/([\d\.]+)/.exec(Ft)
                  : Ht
                  ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ft)
                  : Wt
                  ? /WebKit\/(\S+)/.exec(Ft)
                  : qt
                  ? /(?:Version)[ \/]?(\S+)/.exec(Ft)
                  : void 0)
            if ((Yt && (Jt = Yt ? Yt[1] : ""), Ht)) {
              var zt = Xt()
              if (null != zt && zt > parseFloat(Jt)) {
                Vt = String(zt)
                break t
              }
            }
            Vt = Jt
          }
          var $t,
            Zt = {}
          function Qt(s) {
            return (
              (t = s),
              (e = function () {
                for (
                  var t = 0,
                    e = J(String(Vt)).split("."),
                    n = J(String(s)).split("."),
                    i = Math.max(e.length, n.length),
                    r = 0;
                  0 == t && r < i;
                  r++
                ) {
                  var o = e[r] || "",
                    a = n[r] || ""
                  do {
                    if (
                      ((o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
                      (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
                      0 == o[0].length && 0 == a[0].length)
                    )
                      break
                    ;(t =
                      it(
                        0 == o[1].length ? 0 : parseInt(o[1], 10),
                        0 == a[1].length ? 0 : parseInt(a[1], 10)
                      ) ||
                      it(0 == o[2].length, 0 == a[2].length) ||
                      it(o[2], a[2])),
                      (o = o[3]),
                      (a = a[3])
                  } while (0 == t)
                }
                return 0 <= t
              }),
              (n = Zt),
              Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t))
            )
            var t, e, n
          }
          $t = l.document && Ht ? Xt() : void 0
          try {
            new self.OffscreenCanvas(0, 0).getContext("2d")
          } catch (t) {}
          var te = !Ht || 9 <= Number($t)
          function ee(t) {
            var e = document
            return "string" == typeof t ? e.getElementById(t) : t
          }
          function ne(n, t) {
            st(t, function (t, e) {
              t && "object" == typeof t && t.ra && (t = t.qa()),
                "style" == e
                  ? (n.style.cssText = t)
                  : "class" == e
                  ? (n.className = t)
                  : "for" == e
                  ? (n.htmlFor = t)
                  : oe.hasOwnProperty(e)
                  ? n.setAttribute(oe[e], t)
                  : 0 == e.lastIndexOf("aria-", 0) ||
                    0 == e.lastIndexOf("data-", 0)
                  ? n.setAttribute(e, t)
                  : (n[e] = t)
            })
          }
          var ie,
            re,
            oe = {
              cellpadding: "cellPadding",
              cellspacing: "cellSpacing",
              colspan: "colSpan",
              frameborder: "frameBorder",
              height: "height",
              maxlength: "maxLength",
              nonce: "nonce",
              role: "role",
              rowspan: "rowSpan",
              type: "type",
              usemap: "useMap",
              valign: "vAlign",
              width: "width",
            }
          function ae(t, e, n) {
            var i = arguments,
              r = document,
              o = String(i[0]),
              a = i[1]
            if (!te && a && (a.name || a.type)) {
              if (
                ((o = ["<", o]),
                a.name && o.push(' name="', jt(a.name), '"'),
                a.type)
              ) {
                o.push(' type="', jt(a.type), '"')
                var s = {}
                lt(s, a), delete s.type, (a = s)
              }
              o.push(">"), (o = o.join(""))
            }
            return (
              (o = se(r, o)),
              a &&
                ("string" == typeof a
                  ? (o.className = a)
                  : Array.isArray(a)
                  ? (o.className = a.join(" "))
                  : ne(o, a)),
              2 < i.length &&
                (function (e, n, t) {
                  function i(t) {
                    t &&
                      n.appendChild(
                        "string" == typeof t ? e.createTextNode(t) : t
                      )
                  }
                  for (var r = 2; r < t.length; r++) {
                    var o = t[r]
                    !h(o) || (v(o) && 0 < o.nodeType)
                      ? i(o)
                      : U(ue(o) ? W(o) : o, i)
                  }
                })(r, o, i),
              o
            )
          }
          function se(t, e) {
            return (
              (e = String(e)),
              "application/xhtml+xml" === t.contentType &&
                (e = e.toLowerCase()),
              t.createElement(e)
            )
          }
          function ue(t) {
            if (t && "number" == typeof t.length) {
              if (v(t))
                return "function" == typeof t.item || "string" == typeof t.item
              if (p(t)) return "function" == typeof t.item
            }
          }
          function ce(t) {
            l.setTimeout(function () {
              throw t
            }, 0)
          }
          function he() {
            var t = l.MessageChannel
            if (
              (void 0 === t &&
                "undefined" != typeof window &&
                window.postMessage &&
                window.addEventListener &&
                !at("Presto") &&
                (t = function () {
                  var t,
                    e,
                    n = se(document, "IFRAME")
                  ;(n.style.display = "none"),
                    (t = n),
                    (e = new bt(At, pt(gt))),
                    ft(t, "HTMLIFrameElement"),
                    (t.src = yt(e).toString()),
                    document.documentElement.appendChild(n)
                  var i = n.contentWindow
                  ;(n = i.document).open(), n.write(Dt(Mt)), n.close()
                  var r = "callImmediate" + Math.random(),
                    o =
                      "file:" == i.location.protocol
                        ? "*"
                        : i.location.protocol + "//" + i.location.host
                  ;(n = b(function (t) {
                    ;("*" != o && t.origin != o) ||
                      t.data != r ||
                      this.port1.onmessage()
                  }, this)),
                    i.addEventListener("message", n, !1),
                    (this.port1 = {}),
                    (this.port2 = {
                      postMessage: function () {
                        i.postMessage(r, o)
                      },
                    })
                }),
              void 0 === t || at("Trident") || at("MSIE"))
            )
              return function (t) {
                l.setTimeout(t, 0)
              }
            var e = new t(),
              n = {},
              i = n
            return (
              (e.port1.onmessage = function () {
                if (void 0 !== n.next) {
                  var t = (n = n.next).Db
                  ;(n.Db = null), t()
                }
              }),
              function (t) {
                ;(i.next = { Db: t }), (i = i.next), e.port2.postMessage(0)
              }
            )
          }
          function le(t, e) {
            re ||
              (function () {
                if (l.Promise && l.Promise.resolve) {
                  var t = l.Promise.resolve(void 0)
                  re = function () {
                    t.then(pe)
                  }
                } else
                  re = function () {
                    var t = pe
                    !p(l.setImmediate) ||
                    (l.Window &&
                      l.Window.prototype &&
                      !at("Edge") &&
                      l.Window.prototype.setImmediate == l.setImmediate)
                      ? (ie = ie || he())(t)
                      : l.setImmediate(t)
                  }
              })(),
              fe || (re(), (fe = !0)),
              de.add(t, e)
          }
          var fe = !1,
            de = new L()
          function pe() {
            for (
              var t;
              (n = e = void 0),
                (n = null),
                (e = de).a &&
                  ((n = e.a),
                  (e.a = e.a.next),
                  e.a || (e.b = null),
                  (n.next = null)),
                (t = n);

            ) {
              try {
                t.a.call(t.b)
              } catch (t) {
                ce(t)
              }
              P(M, t)
            }
            var e, n
            fe = !1
          }
          function ve(t, e) {
            if (
              ((this.a = me),
              (this.i = void 0),
              (this.f = this.b = this.c = null),
              (this.g = this.h = !1),
              t != s)
            )
              try {
                var n = this
                t.call(
                  e,
                  function (t) {
                    _e(n, ge, t)
                  },
                  function (t) {
                    if (!(t instanceof Me))
                      try {
                        if (t instanceof Error) throw t
                        throw Error("Promise rejected.")
                      } catch (t) {}
                    _e(n, be, t)
                  }
                )
              } catch (t) {
                _e(this, be, t)
              }
          }
          var me = 0,
            ge = 2,
            be = 3
          function ye() {
            ;(this.next = this.f = this.b = this.g = this.a = null),
              (this.c = !1)
          }
          ye.prototype.reset = function () {
            ;(this.f = this.b = this.g = this.a = null), (this.c = !1)
          }
          var we = new D(
            function () {
              return new ye()
            },
            function (t) {
              t.reset()
            }
          )
          function Ie(t, e, n) {
            var i = we.get()
            return (i.g = t), (i.b = e), (i.f = n), i
          }
          function Te(t) {
            if (t instanceof ve) return t
            var e = new ve(s)
            return _e(e, ge, t), e
          }
          function Ee(n) {
            return new ve(function (t, e) {
              e(n)
            })
          }
          function Ae(t, e, n) {
            Oe(t, e, n, null) || le(y(e, t))
          }
          function ke(n) {
            return new ve(function (i) {
              var r = n.length,
                o = []
              if (r)
                for (
                  var t = function (t, e, n) {
                      r--,
                        (o[t] = e
                          ? { Mb: !0, value: n }
                          : { Mb: !1, reason: n }),
                        0 == r && i(o)
                    },
                    e = 0;
                  e < n.length;
                  e++
                )
                  Ae(n[e], y(t, e, !0), y(t, e, !1))
              else i(o)
            })
          }
          function Se(t, e) {
            t.b || (t.a != ge && t.a != be) || Re(t),
              t.f ? (t.f.next = e) : (t.b = e),
              (t.f = e)
          }
          function Ne(t, r, o, a) {
            var e = Ie(null, null, null)
            return (
              (e.a = new ve(function (n, i) {
                ;(e.g = r
                  ? function (t) {
                      try {
                        var e = r.call(a, t)
                        n(e)
                      } catch (t) {
                        i(t)
                      }
                    }
                  : n),
                  (e.b = o
                    ? function (t) {
                        try {
                          var e = o.call(a, t)
                          void 0 === e && t instanceof Me ? i(t) : n(e)
                        } catch (t) {
                          i(t)
                        }
                      }
                    : i)
              })),
              Se((e.a.c = t), e),
              e.a
            )
          }
          function _e(t, e, n) {
            var i, r
            t.a == me &&
              (t === n &&
                ((e = be),
                (n = new TypeError("Promise cannot resolve to itself"))),
              (t.a = 1),
              Oe(n, t.Yc, t.Zc, t) ||
                ((t.i = n),
                (t.a = e),
                (t.c = null),
                Re(t),
                e != be ||
                  n instanceof Me ||
                  ((r = n),
                  ((i = t).g = !0),
                  le(function () {
                    i.g && Le.call(null, r)
                  }))))
          }
          function Oe(t, e, n, i) {
            if (t instanceof ve) return Se(t, Ie(e || s, n || null, i)), 1
            if (_(t)) return t.then(e, n, i), 1
            if (v(t))
              try {
                var r = t.then
                if (p(r))
                  return (
                    (function (t, e, n, i, r) {
                      function o(t) {
                        a || ((a = !0), i.call(r, t))
                      }
                      var a = !1
                      try {
                        e.call(
                          t,
                          function (t) {
                            a || ((a = !0), n.call(r, t))
                          },
                          o
                        )
                      } catch (t) {
                        o(t)
                      }
                    })(t, r, e, n, i),
                    1
                  )
              } catch (t) {
                return n.call(i, t), 1
              }
          }
          function Re(t) {
            t.h || ((t.h = !0), le(t.ec, t))
          }
          function Ce(t) {
            var e = null
            return (
              t.b && ((e = t.b), (t.b = e.next), (e.next = null)),
              t.b || (t.f = null),
              e
            )
          }
          function De(t, e, n, i) {
            if (n == be && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1
            if (e.a) (e.a.c = null), Pe(e, n, i)
            else
              try {
                e.c ? e.g.call(e.f) : Pe(e, n, i)
              } catch (t) {
                Le.call(null, t)
              }
            P(we, e)
          }
          function Pe(t, e, n) {
            e == ge ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
          }
          ;(ve.prototype.then = function (t, e, n) {
            return Ne(this, p(t) ? t : null, p(e) ? e : null, n)
          }),
            (ve.prototype.$goog_Thenable = !0),
            ((t = ve.prototype).ma = function (t, e) {
              return ((t = Ie(t, t, e)).c = !0), Se(this, t), this
            }),
            (t.o = function (t, e) {
              return Ne(this, null, t, e)
            }),
            (t.cancel = function (t) {
              if (this.a == me) {
                var e = new Me(t)
                le(function () {
                  !(function t(e, n) {
                    if (e.a == me)
                      if (e.c) {
                        var i = e.c
                        if (i.b) {
                          for (
                            var r = 0, o = null, a = null, s = i.b;
                            s &&
                            (s.c || (r++, s.a == e && (o = s), !(o && 1 < r)));
                            s = s.next
                          )
                            o || (a = s)
                          o &&
                            (i.a == me && 1 == r
                              ? t(i, n)
                              : (a
                                  ? ((r = a).next == i.f && (i.f = r),
                                    (r.next = r.next.next))
                                  : Ce(i),
                                De(i, o, be, n)))
                        }
                        e.c = null
                      } else _e(e, be, n)
                  })(this, e)
                }, this)
              }
            }),
            (t.Yc = function (t) {
              ;(this.a = me), _e(this, ge, t)
            }),
            (t.Zc = function (t) {
              ;(this.a = me), _e(this, be, t)
            }),
            (t.ec = function () {
              for (var t; (t = Ce(this)); ) De(this, t, this.a, this.i)
              this.h = !1
            })
          var Le = ce
          function Me(t) {
            O.call(this, t)
          }
          function xe() {
            ;(this.wa = this.wa), (this.na = this.na)
          }
          e(Me, O)
          var je = 0
          function Ue(t) {
            if (!t.wa && ((t.wa = !0), t.Ba(), 0 != je))
              (e = t),
                (Object.prototype.hasOwnProperty.call(e, i) && e[i]) ||
                  (e[i] = ++r)
            var e
          }
          ;(xe.prototype.wa = !(Me.prototype.name = "cancel")),
            (xe.prototype.Ba = function () {
              if (this.na) for (; this.na.length; ) this.na.shift()()
            })
          var Ve =
              Object.freeze ||
              function (t) {
                return t
              },
            Fe = !Ht || 9 <= Number($t),
            qe = Ht && !Qt("9"),
            He = (function () {
              if (!l.addEventListener || !Object.defineProperty) return !1
              var t = !1,
                e = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0
                  },
                })
              try {
                l.addEventListener("test", s, e),
                  l.removeEventListener("test", s, e)
              } catch (t) {}
              return t
            })()
          function Ke(t, e) {
            ;(this.type = t),
              (this.b = this.target = e),
              (this.defaultPrevented = !1)
          }
          function Ge(t, e) {
            if (
              (Ke.call(this, t ? t.type : ""),
              (this.relatedTarget = this.b = this.target = null),
              (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
              (this.key = ""),
              (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
              (this.pointerId = 0),
              (this.pointerType = ""),
              (this.a = null),
              t)
            ) {
              var n = (this.type = t.type),
                i =
                  t.changedTouches && t.changedTouches.length
                    ? t.changedTouches[0]
                    : null
              if (
                ((this.target = t.target || t.srcElement),
                (this.b = e),
                (e = t.relatedTarget))
              ) {
                if (Bt) {
                  t: {
                    try {
                      Ut(e.nodeName)
                      var r = !0
                      break t
                    } catch (t) {}
                    r = !1
                  }
                  r || (e = null)
                }
              } else
                "mouseover" == n
                  ? (e = t.fromElement)
                  : "mouseout" == n && (e = t.toElement)
              ;(this.relatedTarget = e),
                i
                  ? ((this.clientX =
                      void 0 !== i.clientX ? i.clientX : i.pageX),
                    (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
                    (this.screenX = i.screenX || 0),
                    (this.screenY = i.screenY || 0))
                  : ((this.clientX =
                      void 0 !== t.clientX ? t.clientX : t.pageX),
                    (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                    (this.screenX = t.screenX || 0),
                    (this.screenY = t.screenY || 0)),
                (this.button = t.button),
                (this.key = t.key || ""),
                (this.ctrlKey = t.ctrlKey),
                (this.altKey = t.altKey),
                (this.shiftKey = t.shiftKey),
                (this.metaKey = t.metaKey),
                (this.pointerId = t.pointerId || 0),
                (this.pointerType =
                  "string" == typeof t.pointerType
                    ? t.pointerType
                    : Be[t.pointerType] || ""),
                (this.a = t).defaultPrevented && this.preventDefault()
            }
          }
          ;(Ke.prototype.preventDefault = function () {
            this.defaultPrevented = !0
          }),
            e(Ge, Ke)
          var Be = Ve({ 2: "touch", 3: "pen", 4: "mouse" })
          ;(Ge.prototype.preventDefault = function () {
            Ge.Za.preventDefault.call(this)
            var t = this.a
            if (t.preventDefault) t.preventDefault()
            else if (((t.returnValue = !1), qe))
              try {
                ;(t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
                  (t.keyCode = -1)
              } catch (t) {}
          }),
            (Ge.prototype.f = function () {
              return this.a
            })
          var We = "closure_listenable_" + ((1e6 * Math.random()) | 0),
            Xe = 0
          function Je(t, e, n, i, r) {
            ;(this.listener = t),
              (this.proxy = null),
              (this.src = e),
              (this.type = n),
              (this.capture = !!i),
              (this.Ta = r),
              (this.key = ++Xe),
              (this.ua = this.Na = !1)
          }
          function Ye(t) {
            ;(t.ua = !0),
              (t.listener = null),
              (t.proxy = null),
              (t.src = null),
              (t.Ta = null)
          }
          function ze(t) {
            ;(this.src = t), (this.a = {}), (this.b = 0)
          }
          function $e(t, e) {
            var n = e.type
            n in t.a &&
              K(t.a[n], e) &&
              (Ye(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
          }
          function Ze(t, e, n, i) {
            for (var r = 0; r < t.length; ++r) {
              var o = t[r]
              if (!o.ua && o.listener == e && o.capture == !!n && o.Ta == i)
                return r
            }
            return -1
          }
          ze.prototype.add = function (t, e, n, i, r) {
            var o = t.toString()
            ;(t = this.a[o]) || ((t = this.a[o] = []), this.b++)
            var a = Ze(t, e, i, r)
            return (
              -1 < a
                ? ((e = t[a]), n || (e.Na = !1))
                : (((e = new Je(e, this.src, o, !!i, r)).Na = n), t.push(e)),
              e
            )
          }
          var Qe = "closure_lm_" + ((1e6 * Math.random()) | 0),
            tn = {}
          function en(t, e, n, i, r) {
            if (i && i.once) rn(t, e, n, i, r)
            else if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) en(t, e[o], n, i, r)
            else
              (n = dn(n)),
                t && t[We]
                  ? vn(t, e, n, v(i) ? !!i.capture : !!i, r)
                  : nn(t, e, n, !1, i, r)
          }
          function nn(t, e, n, i, r, o) {
            if (!e) throw Error("Invalid event type")
            var a,
              s,
              u = v(r) ? !!r.capture : !!r,
              c = ln(t)
            if (
              (c || (t[Qe] = c = new ze(t)), !(n = c.add(e, n, i, u, o)).proxy)
            )
              if (
                ((a = hn),
                (i = s = Fe
                  ? function (t) {
                      return a.call(s.src, s.listener, t)
                    }
                  : function (t) {
                      if (!(t = a.call(s.src, s.listener, t))) return t
                    }),
                ((n.proxy = i).src = t),
                (i.listener = n),
                t.addEventListener)
              )
                He || (r = u),
                  void 0 === r && (r = !1),
                  t.addEventListener(e.toString(), i, r)
              else if (t.attachEvent) t.attachEvent(sn(e.toString()), i)
              else {
                if (!t.addListener || !t.removeListener)
                  throw Error(
                    "addEventListener and attachEvent are unavailable."
                  )
                t.addListener(i)
              }
          }
          function rn(t, e, n, i, r) {
            if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) rn(t, e[o], n, i, r)
            else
              (n = dn(n)),
                t && t[We]
                  ? mn(t, e, n, v(i) ? !!i.capture : !!i, r)
                  : nn(t, e, n, !0, i, r)
          }
          function on(t, e, n, i, r) {
            if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) on(t, e[o], n, i, r)
            else
              (i = v(i) ? !!i.capture : !!i),
                (n = dn(n)),
                t && t[We]
                  ? ((t = t.u),
                    (e = String(e).toString()) in t.a &&
                      -1 < (n = Ze((o = t.a[e]), n, i, r)) &&
                      (Ye(o[n]),
                      Array.prototype.splice.call(o, n, 1),
                      0 == o.length && (delete t.a[e], t.b--)))
                  : (t = t && ln(t)) &&
                    ((e = t.a[e.toString()]),
                    (t = -1),
                    e && (t = Ze(e, n, i, r)),
                    (n = -1 < t ? e[t] : null) && an(n))
          }
          function an(t) {
            if ("number" != typeof t && t && !t.ua) {
              var e = t.src
              if (e && e[We]) $e(e.u, t)
              else {
                var n = t.type,
                  i = t.proxy
                e.removeEventListener
                  ? e.removeEventListener(n, i, t.capture)
                  : e.detachEvent
                  ? e.detachEvent(sn(n), i)
                  : e.addListener && e.removeListener && e.removeListener(i),
                  (n = ln(e))
                    ? ($e(n, t), 0 == n.b && ((n.src = null), (e[Qe] = null)))
                    : Ye(t)
              }
            }
          }
          function sn(t) {
            return t in tn ? tn[t] : (tn[t] = "on" + t)
          }
          function un(t, e, n, i) {
            var r = !0
            if ((t = ln(t)) && (e = t.a[e.toString()]))
              for (e = e.concat(), t = 0; t < e.length; t++) {
                var o = e[t]
                o &&
                  o.capture == n &&
                  !o.ua &&
                  ((o = cn(o, i)), (r = r && !1 !== o))
              }
            return r
          }
          function cn(t, e) {
            var n = t.listener,
              i = t.Ta || t.src
            return t.Na && an(t), n.call(i, e)
          }
          function hn(t, e) {
            if (t.ua) return !0
            if (Fe) return cn(t, new Ge(e, this))
            if (!e)
              t: {
                e = ["window", "event"]
                for (var n = l, i = 0; i < e.length; i++)
                  if (null == (n = n[e[i]])) {
                    e = null
                    break t
                  }
                e = n
              }
            if (
              ((e = new Ge((i = e), this)),
              (n = !0),
              !(i.keyCode < 0 || null != i.returnValue))
            ) {
              t: {
                var r = !1
                if (0 == i.keyCode)
                  try {
                    i.keyCode = -1
                    break t
                  } catch (t) {
                    r = !0
                  }
                ;(!r && null != i.returnValue) || (i.returnValue = !0)
              }
              for (i = [], r = e.b; r; r = r.parentNode) i.push(r)
              for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                e.b = i[r]
                var o = un(i[r], t, !0, e)
                n = n && o
              }
              for (r = 0; r < i.length; r++)
                (e.b = i[r]), (o = un(i[r], t, !1, e)), (n = n && o)
            }
            return n
          }
          function ln(t) {
            return (t = t[Qe]) instanceof ze ? t : null
          }
          var fn = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0)
          function dn(e) {
            return p(e)
              ? e
              : (e[fn] ||
                  (e[fn] = function (t) {
                    return e.handleEvent(t)
                  }),
                e[fn])
          }
          function pn() {
            xe.call(this), (this.u = new ze(this)), ((this.Yb = this).eb = null)
          }
          function vn(t, e, n, i, r) {
            t.u.add(String(e), n, !1, i, r)
          }
          function mn(t, e, n, i, r) {
            t.u.add(String(e), n, !0, i, r)
          }
          function gn(t, e, n, i) {
            if (!(e = t.u.a[String(e)])) return !0
            e = e.concat()
            for (var r = !0, o = 0; o < e.length; ++o) {
              var a = e[o]
              if (a && !a.ua && a.capture == n) {
                var s = a.listener,
                  u = a.Ta || a.src
                a.Na && $e(t.u, a), (r = !1 !== s.call(u, i) && r)
              }
            }
            return r && !i.defaultPrevented
          }
          function bn(t, e, n) {
            if (p(t)) n && (t = b(t, n))
            else {
              if (!t || "function" != typeof t.handleEvent)
                throw Error("Invalid listener argument")
              t = b(t.handleEvent, t)
            }
            return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0)
          }
          function yn(n) {
            var i = null
            return new ve(function (t, e) {
              ;-1 ==
                (i = bn(function () {
                  t(void 0)
                }, n)) && e(Error("Failed to schedule timer."))
            }).o(function (t) {
              throw (l.clearTimeout(i), t)
            })
          }
          function wn(t) {
            if (t.V && "function" == typeof t.V) return t.V()
            if ("string" == typeof t) return t.split("")
            if (h(t)) {
              for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i])
              return e
            }
            for (i in ((e = []), (n = 0), t)) e[n++] = t[i]
            return e
          }
          function In(t) {
            if (t.X && "function" == typeof t.X) return t.X()
            if (!t.V || "function" != typeof t.V) {
              if (h(t) || "string" == typeof t) {
                var e = []
                t = t.length
                for (var n = 0; n < t; n++) e.push(n)
                return e
              }
              for (var i in ((e = []), (n = 0), t)) e[n++] = i
              return e
            }
          }
          function Tn(t, e) {
            ;(this.b = {}), (this.a = []), (this.c = 0)
            var n = arguments.length
            if (1 < n) {
              if (n % 2) throw Error("Uneven number of arguments")
              for (var i = 0; i < n; i += 2)
                this.set(arguments[i], arguments[i + 1])
            } else if (t)
              if (t instanceof Tn)
                for (n = t.X(), i = 0; i < n.length; i++)
                  this.set(n[i], t.get(n[i]))
              else for (i in t) this.set(i, t[i])
          }
          function En(t) {
            if (t.c != t.a.length) {
              for (var e = 0, n = 0; e < t.a.length; ) {
                var i = t.a[e]
                An(t.b, i) && (t.a[n++] = i), e++
              }
              t.a.length = n
            }
            if (t.c != t.a.length) {
              var r = {}
              for (n = e = 0; e < t.a.length; )
                An(r, (i = t.a[e])) || (r[(t.a[n++] = i)] = 1), e++
              t.a.length = n
            }
          }
          function An(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
          }
          e(pn, xe),
            (pn.prototype[We] = !0),
            (pn.prototype.addEventListener = function (t, e, n, i) {
              en(this, t, e, n, i)
            }),
            (pn.prototype.removeEventListener = function (t, e, n, i) {
              on(this, t, e, n, i)
            }),
            (pn.prototype.dispatchEvent = function (t) {
              var e,
                n = this.eb
              if (n) for (e = []; n; n = n.eb) e.push(n)
              n = this.Yb
              var i = t.type || t
              if ("string" == typeof t) t = new Ke(t, n)
              else if (t instanceof Ke) t.target = t.target || n
              else {
                var r = t
                lt((t = new Ke(i, n)), r)
              }
              if (((r = !0), e))
                for (var o = e.length - 1; 0 <= o; o--) {
                  var a = (t.b = e[o])
                  r = gn(a, i, !0, t) && r
                }
              if (
                ((r = gn((a = t.b = n), i, !0, t) && r),
                (r = gn(a, i, !1, t) && r),
                e)
              )
                for (o = 0; o < e.length; o++)
                  r = gn((a = t.b = e[o]), i, !1, t) && r
              return r
            }),
            (pn.prototype.Ba = function () {
              if ((pn.Za.Ba.call(this), this.u)) {
                var t,
                  e = this.u
                for (t in e.a) {
                  for (var n = e.a[t], i = 0; i < n.length; i++) Ye(n[i])
                  delete e.a[t], e.b--
                }
              }
              this.eb = null
            }),
            ((t = Tn.prototype).V = function () {
              En(this)
              for (var t = [], e = 0; e < this.a.length; e++)
                t.push(this.b[this.a[e]])
              return t
            }),
            (t.X = function () {
              return En(this), this.a.concat()
            }),
            (t.clear = function () {
              ;(this.b = {}), (this.c = this.a.length = 0)
            }),
            (t.get = function (t, e) {
              return An(this.b, t) ? this.b[t] : e
            }),
            (t.set = function (t, e) {
              An(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e)
            }),
            (t.forEach = function (t, e) {
              for (var n = this.X(), i = 0; i < n.length; i++) {
                var r = n[i],
                  o = this.get(r)
                t.call(e, o, r, this)
              }
            })
          var kn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
          function Sn(t, e) {
            var n
            ;(this.b = this.i = this.f = ""),
              (this.l = null),
              (this.g = this.c = ""),
              (this.h = !1),
              t instanceof Sn
                ? ((this.h = void 0 !== e ? e : t.h),
                  Nn(this, t.f),
                  (this.i = t.i),
                  (this.b = t.b),
                  _n(this, t.l),
                  (this.c = t.c),
                  On(this, Jn(t.a)),
                  (this.g = t.g))
                : t && (n = String(t).match(kn))
                ? ((this.h = !!e),
                  Nn(this, n[1] || "", !0),
                  (this.i = Ln(n[2] || "")),
                  (this.b = Ln(n[3] || "", !0)),
                  _n(this, n[4]),
                  (this.c = Ln(n[5] || "", !0)),
                  On(this, n[6] || "", !0),
                  (this.g = Ln(n[7] || "")))
                : ((this.h = !!e), (this.a = new Hn(null, this.h)))
          }
          function Nn(t, e, n) {
            ;(t.f = n ? Ln(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ""))
          }
          function _n(t, e) {
            if (e) {
              if (((e = Number(e)), isNaN(e) || e < 0))
                throw Error("Bad port number " + e)
              t.l = e
            } else t.l = null
          }
          function On(t, e, n) {
            var i, r
            e instanceof Hn
              ? ((t.a = e),
                (i = t.a),
                (r = t.h) &&
                  !i.f &&
                  (Kn(i),
                  (i.c = null),
                  i.a.forEach(function (t, e) {
                    var n = e.toLowerCase()
                    e != n && (Bn(this, e), Xn(this, n, t))
                  }, i)),
                (i.f = r))
              : (n || (e = Mn(e, Fn)), (t.a = new Hn(e, t.h)))
          }
          function Rn(t, e, n) {
            t.a.set(e, n)
          }
          function Cn(t, e) {
            return t.a.get(e)
          }
          function Dn(t) {
            return t instanceof Sn ? new Sn(t) : new Sn(t, void 0)
          }
          function Pn(t, e) {
            var n = new Sn(null, void 0)
            return Nn(n, "https"), t && (n.b = t), e && (n.c = e), n
          }
          function Ln(t, e) {
            return t
              ? e
                ? decodeURI(t.replace(/%25/g, "%2525"))
                : decodeURIComponent(t)
              : ""
          }
          function Mn(t, e, n) {
            return "string" == typeof t
              ? ((t = encodeURI(t).replace(e, xn)),
                n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                t)
              : null
          }
          function xn(t) {
            return (
              "%" +
              (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
              (15 & t).toString(16)
            )
          }
          ;(Sn.prototype.toString = function () {
            var t = [],
              e = this.f
            e && t.push(Mn(e, jn, !0), ":")
            var n = this.b
            return (
              (!n && "file" != e) ||
                (t.push("//"),
                (e = this.i) && t.push(Mn(e, jn, !0), "@"),
                t.push(
                  encodeURIComponent(String(n)).replace(
                    /%25([0-9a-fA-F]{2})/g,
                    "%$1"
                  )
                ),
                null != (n = this.l) && t.push(":", String(n))),
              (n = this.c) &&
                (this.b && "/" != n.charAt(0) && t.push("/"),
                t.push(Mn(n, "/" == n.charAt(0) ? Vn : Un, !0))),
              (n = this.a.toString()) && t.push("?", n),
              (n = this.g) && t.push("#", Mn(n, qn)),
              t.join("")
            )
          }),
            (Sn.prototype.resolve = function (t) {
              var e = new Sn(this),
                n = !!t.f
              n ? Nn(e, t.f) : (n = !!t.i),
                n ? (e.i = t.i) : (n = !!t.b),
                n ? (e.b = t.b) : (n = null != t.l)
              var i = t.c
              if (n) _n(e, t.l)
              else if ((n = !!t.c)) {
                if ("/" != i.charAt(0))
                  if (this.b && !this.c) i = "/" + i
                  else {
                    var r = e.c.lastIndexOf("/")
                    ;-1 != r && (i = e.c.substr(0, r + 1) + i)
                  }
                if (".." == (r = i) || "." == r) i = ""
                else if (nt(r, "./") || nt(r, "/.")) {
                  ;(i = 0 == r.lastIndexOf("/", 0)), (r = r.split("/"))
                  for (var o = [], a = 0; a < r.length; ) {
                    var s = r[a++]
                    "." == s
                      ? i && a == r.length && o.push("")
                      : ".." == s
                      ? ((1 < o.length || (1 == o.length && "" != o[0])) &&
                          o.pop(),
                        i && a == r.length && o.push(""))
                      : (o.push(s), (i = !0))
                  }
                  i = o.join("/")
                } else i = r
              }
              return (
                n ? (e.c = i) : (n = "" !== t.a.toString()),
                n ? On(e, Jn(t.a)) : (n = !!t.g),
                n && (e.g = t.g),
                e
              )
            })
          var jn = /[#\/\?@]/g,
            Un = /[#\?:]/g,
            Vn = /[#\?]/g,
            Fn = /[#\?@]/g,
            qn = /#/g
          function Hn(t, e) {
            ;(this.b = this.a = null), (this.c = t || null), (this.f = !!e)
          }
          function Kn(n) {
            n.a ||
              ((n.a = new Tn()),
              (n.b = 0),
              n.c &&
                (function (t, e) {
                  if (t) {
                    t = t.split("&")
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n].indexOf("="),
                        r = null
                      if (0 <= i) {
                        var o = t[n].substring(0, i)
                        r = t[n].substring(i + 1)
                      } else o = t[n]
                      e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
                    }
                  }
                })(n.c, function (t, e) {
                  n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
                }))
          }
          function Gn(t) {
            var e = In(t)
            if (void 0 === e) throw Error("Keys are undefined")
            var n = new Hn(null, void 0)
            t = wn(t)
            for (var i = 0; i < e.length; i++) {
              var r = e[i],
                o = t[i]
              Array.isArray(o) ? Xn(n, r, o) : n.add(r, o)
            }
            return n
          }
          function Bn(t, e) {
            Kn(t),
              (e = Yn(t, e)),
              An(t.a.b, e) &&
                ((t.c = null),
                (t.b -= t.a.get(e).length),
                An((t = t.a).b, e) &&
                  (delete t.b[e], t.c--, t.a.length > 2 * t.c && En(t)))
          }
          function Wn(t, e) {
            return Kn(t), (e = Yn(t, e)), An(t.a.b, e)
          }
          function Xn(t, e, n) {
            Bn(t, e),
              0 < n.length &&
                ((t.c = null), t.a.set(Yn(t, e), W(n)), (t.b += n.length))
          }
          function Jn(t) {
            var e = new Hn()
            return (e.c = t.c), t.a && ((e.a = new Tn(t.a)), (e.b = t.b)), e
          }
          function Yn(t, e) {
            return (e = String(e)), t.f && (e = e.toLowerCase()), e
          }
          function zn(t) {
            var e = []
            return (
              (function t(e, n, i) {
                if (null == n) i.push("null")
                else {
                  if ("object" == typeof n) {
                    if (Array.isArray(n)) {
                      var r = n
                      ;(n = r.length), i.push("[")
                      for (var o = "", a = 0; a < n; a++)
                        i.push(o), t(e, r[a], i), (o = ",")
                      return void i.push("]")
                    }
                    if (
                      !(
                        n instanceof String ||
                        n instanceof Number ||
                        n instanceof Boolean
                      )
                    ) {
                      for (r in (i.push("{"), (o = ""), n))
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          "function" != typeof (a = n[r]) &&
                          (i.push(o),
                          ti(r, i),
                          i.push(":"),
                          t(e, a, i),
                          (o = ","))
                      return void i.push("}")
                    }
                    n = n.valueOf()
                  }
                  switch (typeof n) {
                    case "string":
                      ti(n, i)
                      break
                    case "number":
                      i.push(isFinite(n) && !isNaN(n) ? String(n) : "null")
                      break
                    case "boolean":
                      i.push(String(n))
                      break
                    case "function":
                      i.push("null")
                      break
                    default:
                      throw Error("Unknown type: " + typeof n)
                  }
                }
              })(new $n(), t, e),
              e.join("")
            )
          }
          function $n() {}
          ;((t = Hn.prototype).add = function (t, e) {
            Kn(this), (this.c = null), (t = Yn(this, t))
            var n = this.a.get(t)
            return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this
          }),
            (t.clear = function () {
              ;(this.a = this.c = null), (this.b = 0)
            }),
            (t.forEach = function (n, i) {
              Kn(this),
                this.a.forEach(function (t, e) {
                  U(
                    t,
                    function (t) {
                      n.call(i, t, e, this)
                    },
                    this
                  )
                }, this)
            }),
            (t.X = function () {
              Kn(this)
              for (
                var t = this.a.V(), e = this.a.X(), n = [], i = 0;
                i < e.length;
                i++
              )
                for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i])
              return n
            }),
            (t.V = function (t) {
              Kn(this)
              var e = []
              if ("string" == typeof t)
                Wn(this, t) && (e = B(e, this.a.get(Yn(this, t))))
              else {
                t = this.a.V()
                for (var n = 0; n < t.length; n++) e = B(e, t[n])
              }
              return e
            }),
            (t.set = function (t, e) {
              return (
                Kn(this),
                (this.c = null),
                Wn(this, (t = Yn(this, t))) && (this.b -= this.a.get(t).length),
                this.a.set(t, [e]),
                (this.b += 1),
                this
              )
            }),
            (t.get = function (t, e) {
              return t && 0 < (t = this.V(t)).length ? String(t[0]) : e
            }),
            (t.toString = function () {
              if (this.c) return this.c
              if (!this.a) return ""
              for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
                var i = e[n],
                  r = encodeURIComponent(String(i))
                i = this.V(i)
                for (var o = 0; o < i.length; o++) {
                  var a = r
                  "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))),
                    t.push(a)
                }
              }
              return (this.c = t.join("&"))
            })
          var Zn = {
              '"': '\\"',
              "\\": "\\\\",
              "/": "\\/",
              "\b": "\\b",
              "\f": "\\f",
              "\n": "\\n",
              "\r": "\\r",
              "\t": "\\t",
              "\v": "\\u000b",
            },
            Qn = /\uffff/.test("￿")
              ? /[\\"\x00-\x1f\x7f-\uffff]/g
              : /[\\"\x00-\x1f\x7f-\xff]/g
          function ti(t, e) {
            e.push(
              '"',
              t.replace(Qn, function (t) {
                var e = Zn[t]
                return (
                  e ||
                    ((e =
                      "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
                    (Zn[t] = e)),
                  e
                )
              }),
              '"'
            )
          }
          function ei() {
            var t = wi()
            return (Ht && $t && 11 == $t) || /Edge\/\d+/.test(t)
          }
          function ni() {
            return (
              (l.window && l.window.location.href) ||
              (self && self.location && self.location.href) ||
              ""
            )
          }
          function ii(t, e) {
            e = e || l.window
            var n = "about:blank"
            t && (n = St(_t(t))), (e.location.href = n)
          }
          function ri(t) {
            return !!(
              (t = (t || wi()).toLowerCase()).match(/android/) ||
              t.match(/webos/) ||
              t.match(/iphone|ipad|ipod/) ||
              t.match(/blackberry/) ||
              t.match(/windows phone/) ||
              t.match(/iemobile/)
            )
          }
          function oi(t) {
            t = t || l.window
            try {
              t.close()
            } catch (t) {}
          }
          function ai(t, e, n) {
            var i = Math.floor(1e9 * Math.random()).toString()
            ;(e = e || 500), (n = n || 600)
            var r = (window.screen.availHeight - n) / 2,
              o = (window.screen.availWidth - e) / 2
            for (a in ((e = {
              width: e,
              height: n,
              top: 0 < r ? r : 0,
              left: 0 < o ? o : 0,
              location: !0,
              resizable: !0,
              statusbar: !0,
              toolbar: !1,
            }),
            (n = wi().toLowerCase()),
            i && ((e.target = i), nt(n, "crios/") && (e.target = "_blank")),
            gi(wi()) == vi &&
              ((t = t || "http://localhost"), (e.scrollbars = !0)),
            (n = t || ""),
            (t = e) || (t = {}),
            (i = window),
            (e =
              n instanceof kt ? n : _t(void 0 !== n.href ? n.href : String(n))),
            (n = t.target || n.target),
            (r = []),
            t))
              switch (a) {
                case "width":
                case "height":
                case "top":
                case "left":
                  r.push(a + "=" + t[a])
                  break
                case "target":
                case "noopener":
                case "noreferrer":
                  break
                default:
                  r.push(a + "=" + (t[a] ? 1 : 0))
              }
            var a = r.join(",")
            if (
              (((at("iPhone") && !at("iPod") && !at("iPad")) ||
                at("iPad") ||
                at("iPod")) &&
              i.navigator &&
              i.navigator.standalone &&
              n &&
              "_self" != n
                ? (ft((a = se(document, "A")), "HTMLAnchorElement"),
                  e instanceof kt ||
                    e instanceof kt ||
                    ((e = "object" == typeof e && e.ra ? e.qa() : String(e)),
                    Nt.test(e) || (e = "about:invalid#zClosurez"),
                    (e = new kt(Rt, e))),
                  (a.href = St(e)),
                  a.setAttribute("target", n),
                  t.noreferrer && a.setAttribute("rel", "noreferrer"),
                  (t = document.createEvent("MouseEvent")).initMouseEvent(
                    "click",
                    !0,
                    !0,
                    i,
                    1
                  ),
                  a.dispatchEvent(t),
                  (a = {}))
                : t.noreferrer
                ? ((a = i.open("", n, a)),
                  (t = St(e)),
                  a &&
                    (Gt &&
                      nt(t, ";") &&
                      (t = "'" + t.replace(/'/g, "%27") + "'"),
                    (a.opener = null),
                    (t = Lt(
                      '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                        jt(t) +
                        '">'
                    )),
                    (i = a.document)) &&
                    (i.write(Dt(t)), i.close()))
                : (a = i.open(St(e), n, a)) && t.noopener && (a.opener = null),
              a)
            )
              try {
                a.focus()
              } catch (t) {}
            return a
          }
          var si = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            ui = /^[^@]+@[^@]+$/
          function ci() {
            var e = null
            return new ve(function (t) {
              "complete" == l.document.readyState
                ? t()
                : ((e = function () {
                    t()
                  }),
                  rn(window, "load", e))
            }).o(function (t) {
              throw (on(window, "load", e), t)
            })
          }
          function hi(t) {
            return (
              (t = t || wi()),
              !(
                ("file:" !== ki() && "ionic:" !== ki()) ||
                !t.toLowerCase().match(/iphone|ipad|ipod|android/)
              )
            )
          }
          function li() {
            var t = l.window
            try {
              return t && t != t.top
            } catch (t) {
              return
            }
          }
          function fi() {
            return (
              void 0 !== l.WorkerGlobalScope &&
              "function" == typeof l.importScripts
            )
          }
          function di() {
            return Xl.INTERNAL.hasOwnProperty("reactNative")
              ? "ReactNative"
              : Xl.INTERNAL.hasOwnProperty("node")
              ? "Node"
              : fi()
              ? "Worker"
              : "Browser"
          }
          function pi() {
            var t = di()
            return "ReactNative" === t || "Node" === t
          }
          var vi = "Firefox",
            mi = "Chrome"
          function gi(t) {
            var e = t.toLowerCase()
            return nt(e, "opera/") || nt(e, "opr/") || nt(e, "opios/")
              ? "Opera"
              : nt(e, "iemobile")
              ? "IEMobile"
              : nt(e, "msie") || nt(e, "trident/")
              ? "IE"
              : nt(e, "edge/")
              ? "Edge"
              : nt(e, "firefox/")
              ? vi
              : nt(e, "silk/")
              ? "Silk"
              : nt(e, "blackberry")
              ? "Blackberry"
              : nt(e, "webos")
              ? "Webos"
              : !nt(e, "safari/") ||
                nt(e, "chrome/") ||
                nt(e, "crios/") ||
                nt(e, "android")
              ? (!nt(e, "chrome/") && !nt(e, "crios/")) || nt(e, "edge/")
                ? nt(e, "android")
                  ? "Android"
                  : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) &&
                    2 == t.length
                  ? t[1]
                  : "Other"
                : mi
              : "Safari"
          }
          var bi = { jd: "FirebaseCore-web", ld: "FirebaseUI-web" }
          function yi(t, e) {
            e = e || []
            var n,
              i = [],
              r = {}
            for (n in bi) r[bi[n]] = !0
            for (n = 0; n < e.length; n++)
              void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]))
            return (
              i.sort(),
              (e = i).length || (e = ["FirebaseCore-web"]),
              "Browser" === (i = di())
                ? (i = gi((r = wi())))
                : "Worker" === i && (i = gi((r = wi())) + "-" + i),
              i + "/JsCore/" + t + "/" + e.join(",")
            )
          }
          function wi() {
            return (l.navigator && l.navigator.userAgent) || ""
          }
          function Ii(t, e) {
            ;(t = t.split(".")), (e = e || l)
            for (
              var n = 0;
              n < t.length && "object" == typeof e && null != e;
              n++
            )
              e = e[t[n]]
            return n != t.length && (e = void 0), e
          }
          function Ti() {
            try {
              var t = l.localStorage,
                e = Ri()
              if (t)
                return (
                  t.setItem(e, "1"), t.removeItem(e), !ei() || !!l.indexedDB
                )
            } catch (t) {
              return fi() && !!l.indexedDB
            }
            return !1
          }
          function Ei() {
            return (
              (Ai() || "chrome-extension:" === ki() || hi()) &&
              !pi() &&
              Ti() &&
              !fi()
            )
          }
          function Ai() {
            return "http:" === ki() || "https:" === ki()
          }
          function ki() {
            return (l.location && l.location.protocol) || null
          }
          function Si(t) {
            return !ri((t = t || wi())) && gi(t) != vi
          }
          function Ni(t) {
            return void 0 === t ? null : zn(t)
          }
          function _i(t) {
            var e,
              n = {}
            for (e in t)
              t.hasOwnProperty(e) &&
                null !== t[e] &&
                void 0 !== t[e] &&
                (n[e] = t[e])
            return n
          }
          function Oi(t) {
            if (null !== t) return JSON.parse(t)
          }
          function Ri(t) {
            return t || Math.floor(1e9 * Math.random()).toString()
          }
          function Ci(t) {
            return (
              "Safari" != gi((t = t || wi())) &&
              !t.toLowerCase().match(/iphone|ipad|ipod/)
            )
          }
          function Di() {
            var t = l.___jsl
            if (t && t.H)
              for (var e in t.H)
                if (
                  ((t.H[e].r = t.H[e].r || []),
                  (t.H[e].L = t.H[e].L || []),
                  (t.H[e].r = t.H[e].L.concat()),
                  t.CP)
                )
                  for (var n = 0; n < t.CP.length; n++) t.CP[n] = null
          }
          function Pi(t, e) {
            if (e < t)
              throw Error("Short delay should be less than long delay!")
            ;(this.a = t),
              (this.c = e),
              (t = wi()),
              (e = di()),
              (this.b = ri(t) || "ReactNative" === e)
          }
          function Li() {
            var t = l.document
            return (
              !t ||
              void 0 === t.visibilityState ||
              "visible" == t.visibilityState
            )
          }
          function Mi(t) {
            try {
              var e = new Date(parseInt(t, 10))
              if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
                return e.toUTCString()
            } catch (t) {}
            return null
          }
          function xi() {
            return Ii("fireauth.oauthhelper", l) || Ii("fireauth.iframe", l)
          }
          Pi.prototype.get = function () {
            var t = l.navigator
            return !t ||
              "boolean" != typeof t.onLine ||
              (!Ai() &&
                "chrome-extension:" !== ki() &&
                void 0 === t.connection) ||
              t.onLine
              ? this.b
                ? this.c
                : this.a
              : Math.min(5e3, this.a)
          }
          var ji,
            Ui = {}
          function Vi(t) {
            Ui[t] ||
              ((Ui[t] = !0),
              "undefined" != typeof console &&
                "function" == typeof console.warn &&
                console.warn(t))
          }
          try {
            var Fi = {}
            Object.defineProperty(Fi, "abcd", {
              configurable: !0,
              enumerable: !0,
              value: 1,
            }),
              Object.defineProperty(Fi, "abcd", {
                configurable: !0,
                enumerable: !0,
                value: 2,
              }),
              (ji = 2 == Fi.abcd)
          } catch (t) {
            ji = !1
          }
          function qi(t, e, n) {
            ji
              ? Object.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                })
              : (t[e] = n)
          }
          function Hi(t, e) {
            if (e) for (var n in e) e.hasOwnProperty(n) && qi(t, n, e[n])
          }
          function Ki(t) {
            var e = {}
            return Hi(e, t), e
          }
          function Gi(t) {
            var e = t
            if ("object" == typeof t && null != t)
              for (var n in ((e = "length" in t ? [] : {}), t))
                qi(e, n, Gi(t[n]))
            return e
          }
          function Bi(t) {
            var e = t && (t[zi] ? "phone" : null)
            if (!(e && t && t[Yi]))
              throw new I(
                "internal-error",
                "Internal assert: invalid MultiFactorInfo object"
              )
            qi(this, "uid", t[Yi]), qi(this, "displayName", t[Xi] || null)
            var n = null
            t[Ji] && (n = new Date(t[Ji]).toUTCString()),
              qi(this, "enrollmentTime", n),
              qi(this, "factorId", e)
          }
          function Wi(t) {
            try {
              var e = new $i(t)
            } catch (t) {
              e = null
            }
            return e
          }
          Bi.prototype.v = function () {
            return {
              uid: this.uid,
              displayName: this.displayName,
              factorId: this.factorId,
              enrollmentTime: this.enrollmentTime,
            }
          }
          var Xi = "displayName",
            Ji = "enrolledAt",
            Yi = "mfaEnrollmentId",
            zi = "phoneInfo"
          function $i(t) {
            Bi.call(this, t), qi(this, "phoneNumber", t[zi])
          }
          function Zi(t) {
            var e = {},
              n = t[nr],
              i = t[rr],
              r = t[or]
            if (
              ((t = Wi(t[ir])),
              !r ||
                (r != tr && r != er && !n) ||
                (r == er && !i) ||
                (r == Qi && !t))
            )
              throw Error("Invalid checkActionCode response!")
            r == er
              ? ((e[sr] = n || null), (e[cr] = n || null), (e[ar] = i))
              : ((e[sr] = i || null), (e[cr] = i || null), (e[ar] = n || null)),
              (e[ur] = t || null),
              qi(this, lr, r),
              qi(this, hr, Gi(e))
          }
          e($i, Bi),
            ($i.prototype.v = function () {
              var t = $i.Za.v.call(this)
              return (t.phoneNumber = this.phoneNumber), t
            })
          var Qi = "REVERT_SECOND_FACTOR_ADDITION",
            tr = "EMAIL_SIGNIN",
            er = "VERIFY_AND_CHANGE_EMAIL",
            nr = "email",
            ir = "mfaInfo",
            rr = "newEmail",
            or = "requestType",
            ar = "email",
            sr = "fromEmail",
            ur = "multiFactorInfo",
            cr = "previousEmail",
            hr = "data",
            lr = "operation"
          function fr(t) {
            var e = Cn((t = Dn(t)), dr) || null,
              n = Cn(t, pr) || null,
              i = Cn(t, gr) || null
            if (((i = (i && yr[i]) || null), !e || !n || !i))
              throw new I(
                "argument-error",
                dr +
                  ", " +
                  pr +
                  "and " +
                  gr +
                  " are required in a valid action code URL."
              )
            Hi(this, {
              apiKey: e,
              operation: i,
              code: n,
              continueUrl: Cn(t, vr) || null,
              languageCode: Cn(t, mr) || null,
              tenantId: Cn(t, br) || null,
            })
          }
          var dr = "apiKey",
            pr = "oobCode",
            vr = "continueUrl",
            mr = "languageCode",
            gr = "mode",
            br = "tenantId",
            yr = {
              recoverEmail: "RECOVER_EMAIL",
              resetPassword: "PASSWORD_RESET",
              revertSecondFactorAddition: Qi,
              signIn: tr,
              verifyAndChangeEmail: er,
              verifyEmail: "VERIFY_EMAIL",
            }
          function wr(t) {
            try {
              return new fr(t)
            } catch (t) {
              return null
            }
          }
          function Ir(t) {
            var e = t[Sr]
            if (void 0 === e) throw new I("missing-continue-uri")
            if ("string" != typeof e || ("string" == typeof e && !e.length))
              throw new I("invalid-continue-uri")
            ;(this.h = e), (this.b = this.a = null), (this.g = !1)
            var n = t[Tr]
            if (n && "object" == typeof n) {
              e = n[Or]
              var i = n[Nr]
              if (((n = n[_r]), "string" == typeof e && e.length)) {
                if (((this.a = e), void 0 !== i && "boolean" != typeof i))
                  throw new I(
                    "argument-error",
                    Nr + " property must be a boolean when specified."
                  )
                if (
                  ((this.g = !!i),
                  void 0 !== n &&
                    ("string" != typeof n ||
                      ("string" == typeof n && !n.length)))
                )
                  throw new I(
                    "argument-error",
                    _r + " property must be a non empty string when specified."
                  )
                this.b = n || null
              } else {
                if (void 0 !== e)
                  throw new I(
                    "argument-error",
                    Or + " property must be a non empty string when specified."
                  )
                if (void 0 !== i || void 0 !== n)
                  throw new I("missing-android-pkg-name")
              }
            } else if (void 0 !== n)
              throw new I(
                "argument-error",
                Tr + " property must be a non null object when specified."
              )
            if (((this.f = null), (e = t[kr]) && "object" == typeof e)) {
              if ("string" == typeof (e = e[Rr]) && e.length) this.f = e
              else if (void 0 !== e)
                throw new I(
                  "argument-error",
                  Rr + " property must be a non empty string when specified."
                )
            } else if (void 0 !== e)
              throw new I(
                "argument-error",
                kr + " property must be a non null object when specified."
              )
            if (void 0 !== (e = t[Ar]) && "boolean" != typeof e)
              throw new I(
                "argument-error",
                Ar + " property must be a boolean when specified."
              )
            if (
              ((this.c = !!e),
              void 0 !== (t = t[Er]) &&
                ("string" != typeof t || ("string" == typeof t && !t.length)))
            )
              throw new I(
                "argument-error",
                Er + " property must be a non empty string when specified."
              )
            this.i = t || null
          }
          var Tr = "android",
            Er = "dynamicLinkDomain",
            Ar = "handleCodeInApp",
            kr = "iOS",
            Sr = "url",
            Nr = "installApp",
            _r = "minimumVersion",
            Or = "packageName",
            Rr = "bundleId"
          function Cr(t) {
            var e = {}
            for (var n in ((e.continueUrl = t.h),
            (e.canHandleCodeInApp = t.c),
            (e.androidPackageName = t.a) &&
              ((e.androidMinimumVersion = t.b), (e.androidInstallApp = t.g)),
            (e.iOSBundleId = t.f),
            (e.dynamicLinkDomain = t.i),
            e))
              null === e[n] && delete e[n]
            return e
          }
          var Dr = null
          function Pr(t) {
            var e = ""
            return (
              (function (i, t) {
                function e(t) {
                  for (; r < i.length; ) {
                    var e = i.charAt(r++),
                      n = Dr[e]
                    if (null != n) return n
                    if (!/^[\s\xa0]*$/.test(e))
                      throw Error("Unknown base64 encoding at char: " + e)
                  }
                  return t
                }
                !(function () {
                  if (!Dr) {
                    Dr = {}
                    for (
                      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                          ""
                        ),
                        e = ["+/=", "+/", "-_=", "-_.", "-_"],
                        n = 0;
                      n < 5;
                      n++
                    )
                      for (
                        var i = t.concat(e[n].split("")), r = 0;
                        r < i.length;
                        r++
                      ) {
                        var o = i[r]
                        void 0 === Dr[o] && (Dr[o] = r)
                      }
                  }
                })()
                for (var r = 0; ; ) {
                  var n = e(-1),
                    o = e(0),
                    a = e(64),
                    s = e(64)
                  if (64 === s && -1 === n) break
                  t((n << 2) | (o >> 4)),
                    64 != a &&
                      (t(((o << 4) & 240) | (a >> 2)),
                      64 != s && t(((a << 6) & 192) | s))
                }
              })(t, function (t) {
                e += String.fromCharCode(t)
              }),
              e
            )
          }
          function Lr(t) {
            var e = xr(t)
            if (!(e && e.sub && e.iss && e.aud && e.exp))
              throw Error("Invalid JWT")
            ;(this.g = t),
              (this.c = e.exp),
              (this.h = e.sub),
              (this.a =
                e.provider_id ||
                (e.firebase && e.firebase.sign_in_provider) ||
                null),
              (this.f = (e.firebase && e.firebase.tenant) || null),
              (this.b = !!e.is_anonymous || "anonymous" == this.a)
          }
          function Mr(t) {
            try {
              return new Lr(t)
            } catch (t) {
              return null
            }
          }
          function xr(t) {
            if (!t) return null
            if (3 != (t = t.split(".")).length) return null
            for (var e = (4 - ((t = t[1]).length % 4)) % 4, n = 0; n < e; n++)
              t += "."
            try {
              return JSON.parse(Pr(t))
            } catch (t) {}
            return null
          }
          ;(Lr.prototype.S = function () {
            return this.f
          }),
            (Lr.prototype.i = function () {
              return this.b
            }),
            (Lr.prototype.toString = function () {
              return this.g
            })
          var jr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(
              " "
            ),
            Ur = [
              "client_id",
              "response_type",
              "scope",
              "redirect_uri",
              "state",
            ],
            Vr = {
              kd: {
                Ha: "locale",
                ta: 700,
                sa: 600,
                ea: "facebook.com",
                Va: Ur,
              },
              md: { Ha: null, ta: 500, sa: 750, ea: "github.com", Va: Ur },
              nd: { Ha: "hl", ta: 515, sa: 680, ea: "google.com", Va: Ur },
              td: { Ha: "lang", ta: 485, sa: 705, ea: "twitter.com", Va: jr },
              gd: { Ha: "locale", ta: 640, sa: 600, ea: "apple.com", Va: [] },
            }
          function Fr(t) {
            for (var e in Vr) if (Vr[e].ea == t) return Vr[e]
            return null
          }
          function qr(t) {
            var e = {}
            ;(e["facebook.com"] = Wr),
              (e["google.com"] = Jr),
              (e["github.com"] = Xr),
              (e["twitter.com"] = Yr)
            var n = t && t[Kr]
            try {
              if (n) return e[n] ? new e[n](t) : new Br(t)
              if (void 0 !== t[Hr]) return new Gr(t)
            } catch (t) {}
            return null
          }
          var Hr = "idToken",
            Kr = "providerId"
          function Gr(t) {
            var e = t[Kr]
            if (!e && t[Hr]) {
              var n = Mr(t[Hr])
              n && n.a && (e = n.a)
            }
            if (!e) throw Error("Invalid additional user info!")
            ;("anonymous" != e && "custom" != e) || (e = null),
              (n = !1),
              void 0 !== t.isNewUser
                ? (n = !!t.isNewUser)
                : "identitytoolkit#SignupNewUserResponse" === t.kind &&
                  (n = !0),
              qi(this, "providerId", e),
              qi(this, "isNewUser", n)
          }
          function Br(t) {
            Gr.call(this, t),
              qi(this, "profile", Gi((t = Oi(t.rawUserInfo || "{}")) || {}))
          }
          function Wr(t) {
            if ((Br.call(this, t), "facebook.com" != this.providerId))
              throw Error("Invalid provider ID!")
          }
          function Xr(t) {
            if ((Br.call(this, t), "github.com" != this.providerId))
              throw Error("Invalid provider ID!")
            qi(this, "username", (this.profile && this.profile.login) || null)
          }
          function Jr(t) {
            if ((Br.call(this, t), "google.com" != this.providerId))
              throw Error("Invalid provider ID!")
          }
          function Yr(t) {
            if ((Br.call(this, t), "twitter.com" != this.providerId))
              throw Error("Invalid provider ID!")
            qi(this, "username", t.screenName || null)
          }
          function zr(t) {
            var e = Dn(t),
              n = Cn(e, "link"),
              i = Cn(Dn(n), "link")
            return (
              (e = Cn(e, "deep_link_id")), Cn(Dn(e), "link") || e || i || n || t
            )
          }
          function $r(t, e) {
            if (!t && !e)
              throw new I(
                "internal-error",
                "Internal assert: no raw session string available"
              )
            if (t && e)
              throw new I(
                "internal-error",
                "Internal assert: unable to determine the session type"
              )
            ;(this.a = t || null),
              (this.b = e || null),
              (this.type = this.a ? Zr : Qr)
          }
          e(Br, Gr), e(Wr, Br), e(Xr, Br), e(Jr, Br), e(Yr, Br)
          var Zr = "enroll",
            Qr = "signin"
          function to() {}
          function eo(t, n) {
            return t
              .then(function (t) {
                if (t[Ga]) {
                  var e = Mr(t[Ga])
                  if (!e || n != e.h) throw new I("user-mismatch")
                  return t
                }
                throw new I("user-mismatch")
              })
              .o(function (t) {
                throw t && t.code && t.code == A + "user-not-found"
                  ? new I("user-mismatch")
                  : t
              })
          }
          function no(t, e) {
            if (!e)
              throw new I("internal-error", "failed to construct a credential")
            ;(this.a = e),
              qi(this, "providerId", t),
              qi(this, "signInMethod", t)
          }
          function io(t) {
            return { pendingToken: t.a, requestUri: "http://localhost" }
          }
          function ro(t) {
            if (
              t &&
              t.providerId &&
              t.signInMethod &&
              0 == t.providerId.indexOf("saml.") &&
              t.pendingToken
            )
              try {
                return new no(t.providerId, t.pendingToken)
              } catch (t) {}
            return null
          }
          function oo(t, e, n) {
            if (((this.a = null), e.idToken || e.accessToken))
              e.idToken && qi(this, "idToken", e.idToken),
                e.accessToken && qi(this, "accessToken", e.accessToken),
                e.nonce && !e.pendingToken && qi(this, "nonce", e.nonce),
                e.pendingToken && (this.a = e.pendingToken)
            else {
              if (!e.oauthToken || !e.oauthTokenSecret)
                throw new I(
                  "internal-error",
                  "failed to construct a credential"
                )
              qi(this, "accessToken", e.oauthToken),
                qi(this, "secret", e.oauthTokenSecret)
            }
            qi(this, "providerId", t), qi(this, "signInMethod", n)
          }
          function ao(t) {
            var e = {}
            return (
              t.idToken && (e.id_token = t.idToken),
              t.accessToken && (e.access_token = t.accessToken),
              t.secret && (e.oauth_token_secret = t.secret),
              (e.providerId = t.providerId),
              t.nonce && !t.a && (e.nonce = t.nonce),
              (e = {
                postBody: Gn(e).toString(),
                requestUri: "http://localhost",
              }),
              t.a && (delete e.postBody, (e.pendingToken = t.a)),
              e
            )
          }
          function so(t) {
            if (t && t.providerId && t.signInMethod) {
              var e = {
                idToken: t.oauthIdToken,
                accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                oauthTokenSecret: t.oauthTokenSecret,
                oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                nonce: t.nonce,
                pendingToken: t.pendingToken,
              }
              try {
                return new oo(t.providerId, e, t.signInMethod)
              } catch (t) {}
            }
            return null
          }
          function uo(t, e) {
            ;(this.Oc = e || []),
              Hi(this, { providerId: t, isOAuthProvider: !0 }),
              (this.Fb = {}),
              (this.lb = (Fr(t) || {}).Ha || null),
              (this.kb = null)
          }
          function co(t) {
            if ("string" != typeof t || 0 != t.indexOf("saml."))
              throw new I(
                "argument-error",
                'SAML provider IDs must be prefixed with "saml."'
              )
            uo.call(this, t, [])
          }
          function ho(t) {
            uo.call(this, t, Ur), (this.a = [])
          }
          function lo() {
            ho.call(this, "facebook.com")
          }
          function fo(t) {
            if (!t)
              throw new I(
                "argument-error",
                "credential failed: expected 1 argument (the OAuth access token)."
              )
            var e = t
            return (
              v(t) && (e = t.accessToken),
              new lo().credential({ accessToken: e })
            )
          }
          function po() {
            ho.call(this, "github.com")
          }
          function vo(t) {
            if (!t)
              throw new I(
                "argument-error",
                "credential failed: expected 1 argument (the OAuth access token)."
              )
            var e = t
            return (
              v(t) && (e = t.accessToken),
              new po().credential({ accessToken: e })
            )
          }
          function mo() {
            ho.call(this, "google.com"), this.Aa("profile")
          }
          function go(t, e) {
            var n = t
            return (
              v(t) && ((n = t.idToken), (e = t.accessToken)),
              new mo().credential({ idToken: n, accessToken: e })
            )
          }
          function bo() {
            uo.call(this, "twitter.com", jr)
          }
          function yo(t, e) {
            var n = t
            if (
              (v(n) || (n = { oauthToken: t, oauthTokenSecret: e }),
              !n.oauthToken || !n.oauthTokenSecret)
            )
              throw new I(
                "argument-error",
                "credential failed: expected 2 arguments (the OAuth access token and secret)."
              )
            return new oo("twitter.com", n, "twitter.com")
          }
          function wo(t, e, n) {
            ;(this.a = t),
              (this.f = e),
              qi(this, "providerId", "password"),
              qi(
                this,
                "signInMethod",
                n === To.EMAIL_LINK_SIGN_IN_METHOD
                  ? To.EMAIL_LINK_SIGN_IN_METHOD
                  : To.EMAIL_PASSWORD_SIGN_IN_METHOD
              )
          }
          function Io(t) {
            return t && t.email && t.password
              ? new wo(t.email, t.password, t.signInMethod)
              : null
          }
          function To() {
            Hi(this, { providerId: "password", isOAuthProvider: !1 })
          }
          function Eo(t, e) {
            if (!(e = Ao(e)))
              throw new I("argument-error", "Invalid email link!")
            return new wo(t, e.code, To.EMAIL_LINK_SIGN_IN_METHOD)
          }
          function Ao(t) {
            return (t = wr((t = zr(t)))) && t.operation === tr ? t : null
          }
          function ko(t) {
            if (!((t.bb && t.ab) || (t.Ja && t.da)))
              throw new I("internal-error")
            ;(this.a = t),
              qi(this, "providerId", "phone"),
              (this.ea = "phone"),
              qi(this, "signInMethod", "phone")
          }
          function So(e) {
            if (
              e &&
              "phone" === e.providerId &&
              ((e.verificationId && e.verificationCode) ||
                (e.temporaryProof && e.phoneNumber))
            ) {
              var n = {}
              return (
                U(
                  [
                    "verificationId",
                    "verificationCode",
                    "temporaryProof",
                    "phoneNumber",
                  ],
                  function (t) {
                    e[t] && (n[t] = e[t])
                  }
                ),
                new ko(n)
              )
            }
            return null
          }
          function No(t) {
            return t.a.Ja && t.a.da
              ? { temporaryProof: t.a.Ja, phoneNumber: t.a.da }
              : { sessionInfo: t.a.bb, code: t.a.ab }
          }
          function _o(t) {
            try {
              this.a = t || Xl.auth()
            } catch (t) {
              throw new I(
                "argument-error",
                "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp()."
              )
            }
            Hi(this, { providerId: "phone", isOAuthProvider: !1 })
          }
          function Oo(t, e) {
            if (!t) throw new I("missing-verification-id")
            if (!e) throw new I("missing-verification-code")
            return new ko({ bb: t, ab: e })
          }
          function Ro(t) {
            if (t.temporaryProof && t.phoneNumber)
              return new ko({ Ja: t.temporaryProof, da: t.phoneNumber })
            var e = t && t.providerId
            if (!e || "password" === e) return null
            var n = t && t.oauthAccessToken,
              i = t && t.oauthTokenSecret,
              r = t && t.nonce,
              o = t && t.oauthIdToken,
              a = t && t.pendingToken
            try {
              switch (e) {
                case "google.com":
                  return go(o, n)
                case "facebook.com":
                  return fo(n)
                case "github.com":
                  return vo(n)
                case "twitter.com":
                  return yo(n, i)
                default:
                  return n || i || o || a
                    ? a
                      ? 0 == e.indexOf("saml.")
                        ? new no(e, a)
                        : new oo(
                            e,
                            {
                              pendingToken: a,
                              idToken: t.oauthIdToken,
                              accessToken: t.oauthAccessToken,
                            },
                            e
                          )
                      : new ho(e).credential({
                          idToken: o,
                          accessToken: n,
                          rawNonce: r,
                        })
                    : null
              }
            } catch (t) {
              return null
            }
          }
          function Co(t) {
            if (!t.isOAuthProvider) throw new I("invalid-oauth-provider")
          }
          function Do(t, e, n, i, r, o, a) {
            if (
              ((this.c = t),
              (this.b = e || null),
              (this.g = n || null),
              (this.f = i || null),
              (this.i = o || null),
              (this.h = a || null),
              (this.a = r || null),
              !this.g && !this.a)
            )
              throw new I("invalid-auth-event")
            if (this.g && this.a) throw new I("invalid-auth-event")
            if (this.g && !this.f) throw new I("invalid-auth-event")
          }
          function Po(t) {
            return (t = t || {}).type
              ? new Do(
                  t.type,
                  t.eventId,
                  t.urlResponse,
                  t.sessionId,
                  t.error && T(t.error),
                  t.postBody,
                  t.tenantId
                )
              : null
          }
          function Lo() {
            ;(this.b = null), (this.a = [])
          }
          ;($r.prototype.Fa = function () {
            return this.a ? Te(this.a) : Te(this.b)
          }),
            ($r.prototype.v = function () {
              return this.type == Zr
                ? { multiFactorSession: { idToken: this.a } }
                : { multiFactorSession: { pendingCredential: this.b } }
            }),
            (to.prototype.ia = function () {}),
            (to.prototype.b = function () {}),
            (to.prototype.c = function () {}),
            (to.prototype.v = function () {}),
            (no.prototype.ia = function (t) {
              return hs(t, io(this))
            }),
            (no.prototype.b = function (t, e) {
              var n = io(this)
              return (n.idToken = e), ls(t, n)
            }),
            (no.prototype.c = function (t, e) {
              return eo(fs(t, io(this)), e)
            }),
            (no.prototype.v = function () {
              return {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
                pendingToken: this.a,
              }
            }),
            (oo.prototype.ia = function (t) {
              return hs(t, ao(this))
            }),
            (oo.prototype.b = function (t, e) {
              var n = ao(this)
              return (n.idToken = e), ls(t, n)
            }),
            (oo.prototype.c = function (t, e) {
              return eo(fs(t, ao(this)), e)
            }),
            (oo.prototype.v = function () {
              var t = {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
              }
              return (
                this.idToken && (t.oauthIdToken = this.idToken),
                this.accessToken && (t.oauthAccessToken = this.accessToken),
                this.secret && (t.oauthTokenSecret = this.secret),
                this.nonce && (t.nonce = this.nonce),
                this.a && (t.pendingToken = this.a),
                t
              )
            }),
            (uo.prototype.Ia = function (t) {
              return (this.Fb = ct(t)), this
            }),
            e(co, uo),
            e(ho, uo),
            (ho.prototype.Aa = function (t) {
              return H(this.a, t) || this.a.push(t), this
            }),
            (ho.prototype.Nb = function () {
              return W(this.a)
            }),
            (ho.prototype.credential = function (t, e) {
              var n
              if (
                !(n = v(t)
                  ? {
                      idToken: t.idToken || null,
                      accessToken: t.accessToken || null,
                      nonce: t.rawNonce || null,
                    }
                  : { idToken: t || null, accessToken: e || null }).idToken &&
                !n.accessToken
              )
                throw new I(
                  "argument-error",
                  "credential failed: must provide the ID token and/or the access token."
                )
              return new oo(this.providerId, n, this.providerId)
            }),
            e(lo, ho),
            qi(lo, "PROVIDER_ID", "facebook.com"),
            qi(lo, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
            e(po, ho),
            qi(po, "PROVIDER_ID", "github.com"),
            qi(po, "GITHUB_SIGN_IN_METHOD", "github.com"),
            e(mo, ho),
            qi(mo, "PROVIDER_ID", "google.com"),
            qi(mo, "GOOGLE_SIGN_IN_METHOD", "google.com"),
            e(bo, uo),
            qi(bo, "PROVIDER_ID", "twitter.com"),
            qi(bo, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
            (wo.prototype.ia = function (t) {
              return this.signInMethod == To.EMAIL_LINK_SIGN_IN_METHOD
                ? Xs(t, ws, { email: this.a, oobCode: this.f })
                : Xs(t, Hs, { email: this.a, password: this.f })
            }),
            (wo.prototype.b = function (t, e) {
              return this.signInMethod == To.EMAIL_LINK_SIGN_IN_METHOD
                ? Xs(t, Is, { idToken: e, email: this.a, oobCode: this.f })
                : Xs(t, Ls, { idToken: e, email: this.a, password: this.f })
            }),
            (wo.prototype.c = function (t, e) {
              return eo(this.ia(t), e)
            }),
            (wo.prototype.v = function () {
              return {
                email: this.a,
                password: this.f,
                signInMethod: this.signInMethod,
              }
            }),
            Hi(To, { PROVIDER_ID: "password" }),
            Hi(To, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }),
            Hi(To, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }),
            (ko.prototype.ia = function (t) {
              return t.cb(No(this))
            }),
            (ko.prototype.b = function (t, e) {
              var n = No(this)
              return (n.idToken = e), Xs(t, Gs, n)
            }),
            (ko.prototype.c = function (t, e) {
              var n = No(this)
              return (n.operation = "REAUTH"), eo((t = Xs(t, Bs, n)), e)
            }),
            (ko.prototype.v = function () {
              var t = { providerId: "phone" }
              return (
                this.a.bb && (t.verificationId = this.a.bb),
                this.a.ab && (t.verificationCode = this.a.ab),
                this.a.Ja && (t.temporaryProof = this.a.Ja),
                this.a.da && (t.phoneNumber = this.a.da),
                t
              )
            }),
            (_o.prototype.cb = function (r, n) {
              var o = this.a.b
              return Te(n.verify()).then(function (i) {
                if ("string" != typeof i)
                  throw new I(
                    "argument-error",
                    "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."
                  )
                switch (n.type) {
                  case "recaptcha":
                    var t = v(r) ? r.session : null,
                      e = v(r) ? r.phoneNumber : r
                    return (t && t.type == Zr
                      ? t.Fa().then(function (t) {
                          return Xs(o, xs, {
                            idToken: t,
                            phoneEnrollmentInfo: {
                              phoneNumber: e,
                              recaptchaToken: i,
                            },
                          }).then(function (t) {
                            return t.phoneSessionInfo.sessionInfo
                          })
                        })
                      : t && t.type == Qr
                      ? t.Fa().then(function (t) {
                          return (
                            (e = o),
                            (n = {
                              mfaPendingCredential: t,
                              mfaEnrollmentId:
                                (r.multiFactorHint && r.multiFactorHint.uid) ||
                                r.multiFactorUid,
                              phoneSignInInfo: { recaptchaToken: i },
                            }),
                            Xs(e, js, n).then(function (t) {
                              return t.phoneResponseInfo.sessionInfo
                            })
                          )
                          var e, n
                        })
                      : Xs(o, Ds, { phoneNumber: e, recaptchaToken: i })
                    ).then(
                      function (t) {
                        return "function" == typeof n.reset && n.reset(), t
                      },
                      function (t) {
                        throw ("function" == typeof n.reset && n.reset(), t)
                      }
                    )
                  default:
                    throw new I(
                      "argument-error",
                      'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                    )
                }
              })
            }),
            Hi(_o, { PROVIDER_ID: "phone" }),
            Hi(_o, { PHONE_SIGN_IN_METHOD: "phone" }),
            (Do.prototype.getUid = function () {
              var t = []
              return (
                t.push(this.c),
                this.b && t.push(this.b),
                this.f && t.push(this.f),
                this.h && t.push(this.h),
                t.join("-")
              )
            }),
            (Do.prototype.S = function () {
              return this.h
            }),
            (Do.prototype.v = function () {
              return {
                type: this.c,
                eventId: this.b,
                urlResponse: this.g,
                sessionId: this.f,
                postBody: this.i,
                tenantId: this.h,
                error: this.a && this.a.v(),
              }
            })
          var Mo,
            xo = null
          function jo(t) {
            var e = "unauthorized-domain",
              n = void 0,
              i = Dn(t)
            ;(t = i.b),
              "chrome-extension" == (i = i.f)
                ? (n = xt(
                    "This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
                    t
                  ))
                : "http" == i || "https" == i
                ? (n = xt(
                    "This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
                    t
                  ))
                : (e = "operation-not-supported-in-this-environment"),
              I.call(this, e, n)
          }
          function Uo(t, e, n) {
            I.call(this, t, n),
              (t = e || {}).Gb && qi(this, "email", t.Gb),
              t.da && qi(this, "phoneNumber", t.da),
              t.credential && qi(this, "credential", t.credential),
              t.Wb && qi(this, "tenantId", t.Wb)
          }
          function Vo(t) {
            if (t.code) {
              var e = t.code || ""
              0 == e.indexOf(A) && (e = e.substring(A.length))
              var n = { credential: Ro(t), Wb: t.tenantId }
              if (t.email) n.Gb = t.email
              else if (t.phoneNumber) n.da = t.phoneNumber
              else if (!n.credential) return new I(e, t.message || void 0)
              return new Uo(e, n, t.message)
            }
            return null
          }
          function Fo() {}
          function qo(t) {
            return t.c || (t.c = t.b())
          }
          function Ho() {}
          function Ko(t) {
            if (
              t.f ||
              "undefined" != typeof XMLHttpRequest ||
              "undefined" == typeof ActiveXObject
            )
              return t.f
            for (
              var e = [
                  "MSXML2.XMLHTTP.6.0",
                  "MSXML2.XMLHTTP.3.0",
                  "MSXML2.XMLHTTP",
                  "Microsoft.XMLHTTP",
                ],
                n = 0;
              n < e.length;
              n++
            ) {
              var i = e[n]
              try {
                return new ActiveXObject(i), (t.f = i)
              } catch (t) {}
            }
            throw Error(
              "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
            )
          }
          function Go() {}
          function Bo() {
            ;(this.a = new XDomainRequest()),
              (this.readyState = 0),
              (this.onreadystatechange = null),
              (this.responseType = this.responseText = this.response = ""),
              (this.status = -1),
              (this.statusText = ""),
              (this.a.onload = b(this.oc, this)),
              (this.a.onerror = b(this.Pb, this)),
              (this.a.onprogress = b(this.pc, this)),
              (this.a.ontimeout = b(this.tc, this))
          }
          function Wo(t, e) {
            ;(t.readyState = e), t.onreadystatechange && t.onreadystatechange()
          }
          function Xo(t, e, n) {
            this.reset(t, e, n, void 0, void 0)
          }
          function Jo(t) {
            ;(this.f = t), (this.b = this.c = this.a = null)
          }
          function Yo(t, e) {
            ;(this.name = t), (this.value = e)
          }
          e(jo, I),
            e(Uo, I),
            (Uo.prototype.v = function () {
              var t = { code: this.code, message: this.message }
              this.email && (t.email = this.email),
                this.phoneNumber && (t.phoneNumber = this.phoneNumber),
                this.tenantId && (t.tenantId = this.tenantId)
              var e = this.credential && this.credential.v()
              return e && lt(t, e), t
            }),
            (Uo.prototype.toJSON = function () {
              return this.v()
            }),
            (Fo.prototype.c = null),
            e(Ho, Fo),
            (Ho.prototype.a = function () {
              var t = Ko(this)
              return t ? new ActiveXObject(t) : new XMLHttpRequest()
            }),
            (Ho.prototype.b = function () {
              var t = {}
              return Ko(this) && ((t[0] = !0), (t[1] = !0)), t
            }),
            (Mo = new Ho()),
            e(Go, Fo),
            (Go.prototype.a = function () {
              var t = new XMLHttpRequest()
              if ("withCredentials" in t) return t
              if ("undefined" != typeof XDomainRequest) return new Bo()
              throw Error("Unsupported browser")
            }),
            (Go.prototype.b = function () {
              return {}
            }),
            ((t = Bo.prototype).open = function (t, e, n) {
              if (null != n && !n)
                throw Error("Only async requests are supported.")
              this.a.open(t, e)
            }),
            (t.send = function (t) {
              if (t) {
                if ("string" != typeof t)
                  throw Error("Only string data is supported")
                this.a.send(t)
              } else this.a.send()
            }),
            (t.abort = function () {
              this.a.abort()
            }),
            (t.setRequestHeader = function () {}),
            (t.getResponseHeader = function (t) {
              return "content-type" == t.toLowerCase() ? this.a.contentType : ""
            }),
            (t.oc = function () {
              ;(this.status = 200),
                (this.response = this.responseText = this.a.responseText),
                Wo(this, 4)
            }),
            (t.Pb = function () {
              ;(this.status = 500),
                (this.response = this.responseText = ""),
                Wo(this, 4)
            }),
            (t.tc = function () {
              this.Pb()
            }),
            (t.pc = function () {
              ;(this.status = 200), Wo(this, 1)
            }),
            (t.getAllResponseHeaders = function () {
              return "content-type: " + this.a.contentType
            }),
            (Xo.prototype.a = null),
            (Xo.prototype.reset = function (t, e, n, i, r) {
              delete this.a
            }),
            (Yo.prototype.toString = function () {
              return this.name
            })
          var zo = new Yo("SEVERE", 1e3),
            $o = new Yo("WARNING", 900),
            Zo = new Yo("CONFIG", 700),
            Qo = new Yo("FINE", 500)
          Jo.prototype.log = function (t, e, n) {
            if (
              t.value >=
              (function t(e) {
                return e.c
                  ? e.c
                  : e.a
                  ? t(e.a)
                  : (C("Root logger has no level set."), null)
              })(this).value
            )
              for (
                p(e) && (e = e()),
                  t = new Xo(t, String(e), this.f),
                  n && (t.a = n),
                  n = this;
                n;

              )
                n = n.a
          }
          var ta,
            ea = {},
            na = null
          function ia(t) {
            var e
            if (
              (na || ((na = new Jo("")), ((ea[""] = na).c = Zo)), !(e = ea[t]))
            ) {
              e = new Jo(t)
              var n = t.lastIndexOf("."),
                i = t.substr(n + 1)
              ;(n = ia(t.substr(0, n))).b || (n.b = {}),
                ((n.b[i] = e).a = n),
                (ea[t] = e)
            }
            return e
          }
          function ra(t, e) {
            t && t.log(Qo, e, void 0)
          }
          function oa(t) {
            this.f = t
          }
          function aa(t) {
            pn.call(this),
              (this.s = t),
              (this.readyState = sa),
              (this.status = 0),
              (this.responseType = this.responseText = this.response = this.statusText =
                ""),
              (this.onreadystatechange = null),
              (this.i = new Headers()),
              (this.b = null),
              (this.m = "GET"),
              (this.g = ""),
              (this.a = !1),
              (this.h = ia("goog.net.FetchXmlHttp")),
              (this.l = this.c = this.f = null)
          }
          e(oa, Fo),
            (oa.prototype.a = function () {
              return new aa(this.f)
            }),
            (oa.prototype.b =
              ((ta = {}),
              function () {
                return ta
              })),
            e(aa, pn)
          var sa = 0
          function ua(t) {
            t.c.read().then(t.nc.bind(t)).catch(t.Sa.bind(t))
          }
          function ca(t, e) {
            e &&
              t.f &&
              ((t.status = t.f.status), (t.statusText = t.f.statusText)),
              (t.readyState = 4),
              (t.f = null),
              (t.c = null),
              (t.l = null),
              ha(t)
          }
          function ha(t) {
            t.onreadystatechange && t.onreadystatechange.call(t)
          }
          function la(t) {
            pn.call(this),
              (this.headers = new Tn()),
              (this.D = t || null),
              (this.c = !1),
              (this.B = this.a = null),
              (this.h = this.P = this.l = ""),
              (this.f = this.O = this.i = this.N = !1),
              (this.g = 0),
              (this.s = null),
              (this.m = fa),
              (this.w = this.R = !1)
          }
          ;((t = aa.prototype).open = function (t, e) {
            if (this.readyState != sa)
              throw (this.abort(), Error("Error reopening a connection"))
            ;(this.m = t), (this.g = e), (this.readyState = 1), ha(this)
          }),
            (t.send = function (t) {
              if (1 != this.readyState)
                throw (this.abort(), Error("need to call open() first. "))
              this.a = !0
              var e = {
                headers: this.i,
                method: this.m,
                credentials: void 0,
                cache: void 0,
              }
              t && (e.body = t),
                this.s
                  .fetch(new Request(this.g, e))
                  .then(this.sc.bind(this), this.Sa.bind(this))
            }),
            (t.abort = function () {
              ;(this.response = this.responseText = ""),
                (this.i = new Headers()),
                (this.status = 0),
                this.c && this.c.cancel("Request was aborted."),
                1 <= this.readyState &&
                  this.a &&
                  4 != this.readyState &&
                  ((this.a = !1), ca(this, !1)),
                (this.readyState = sa)
            }),
            (t.sc = function (t) {
              this.a &&
                ((this.f = t),
                this.b ||
                  ((this.b = t.headers), (this.readyState = 2), ha(this)),
                this.a &&
                  ((this.readyState = 3),
                  ha(this),
                  this.a &&
                    ("arraybuffer" === this.responseType
                      ? t
                          .arrayBuffer()
                          .then(this.qc.bind(this), this.Sa.bind(this))
                      : void 0 !== l.ReadableStream && "body" in t
                      ? ((this.response = this.responseText = ""),
                        (this.c = t.body.getReader()),
                        (this.l = new TextDecoder()),
                        ua(this))
                      : t.text().then(this.rc.bind(this), this.Sa.bind(this)))))
            }),
            (t.nc = function (t) {
              if (this.a) {
                var e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                  stream: !t.done,
                })
                e && (this.response = this.responseText += e),
                  t.done ? ca(this, !0) : ha(this),
                  3 == this.readyState && ua(this)
              }
            }),
            (t.rc = function (t) {
              this.a && ((this.response = this.responseText = t), ca(this, !0))
            }),
            (t.qc = function (t) {
              this.a && ((this.response = t), ca(this, !0))
            }),
            (t.Sa = function (t) {
              var e = this.h
              e &&
                e.log(
                  $o,
                  "Failed to fetch url " + this.g,
                  t instanceof Error ? t : Error(t)
                ),
                this.a && ca(this, !0)
            }),
            (t.setRequestHeader = function (t, e) {
              this.i.append(t, e)
            }),
            (t.getResponseHeader = function (t) {
              return this.b
                ? this.b.get(t.toLowerCase()) || ""
                : ((t = this.h) &&
                    t.log(
                      $o,
                      "Attempting to get response header but no headers have been received for url: " +
                        this.g,
                      void 0
                    ),
                  "")
            }),
            (t.getAllResponseHeaders = function () {
              if (!this.b) {
                var t = this.h
                return (
                  t &&
                    t.log(
                      $o,
                      "Attempting to get all response headers but no headers have been received for url: " +
                        this.g,
                      void 0
                    ),
                  ""
                )
              }
              t = []
              for (var e = this.b.entries(), n = e.next(); !n.done; )
                (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next())
              return t.join("\r\n")
            }),
            e(la, pn)
          var fa = ""
          la.prototype.b = ia("goog.net.XhrIo")
          var da = /^https?$/i,
            pa = ["POST", "PUT"]
          function va(e, t, n, i, r) {
            if (e.a)
              throw Error(
                "[goog.net.XhrIo] Object is active with another request=" +
                  e.l +
                  "; newUri=" +
                  t
              )
            ;(n = n ? n.toUpperCase() : "GET"),
              (e.l = t),
              (e.h = ""),
              (e.P = n),
              (e.N = !1),
              (e.c = !0),
              (e.a = e.D ? e.D.a() : Mo.a()),
              (e.B = e.D ? qo(e.D) : qo(Mo)),
              (e.a.onreadystatechange = b(e.Sb, e))
            try {
              ra(e.b, Aa(e, "Opening Xhr")),
                (e.O = !0),
                e.a.open(n, String(t), !0),
                (e.O = !1)
            } catch (t) {
              return (
                ra(e.b, Aa(e, "Error opening Xhr: " + t.message)), void ga(e, t)
              )
            }
            t = i || ""
            var o,
              a = new Tn(e.headers)
            r &&
              (function (t, e) {
                if (t.forEach && "function" == typeof t.forEach)
                  t.forEach(e, void 0)
                else if (h(t) || "string" == typeof t) U(t, e, void 0)
                else
                  for (
                    var n = In(t), i = wn(t), r = i.length, o = 0;
                    o < r;
                    o++
                  )
                    e.call(void 0, i[o], n && n[o], t)
              })(r, function (t, e) {
                a.set(e, t)
              }),
              (r = (function (t) {
                t: {
                  for (
                    var e = ma,
                      n = t.length,
                      i = "string" == typeof t ? t.split("") : t,
                      r = 0;
                    r < n;
                    r++
                  )
                    if (r in i && e.call(void 0, i[r], r, t)) {
                      e = r
                      break t
                    }
                  e = -1
                }
                return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e]
              })(a.X())),
              (i = l.FormData && t instanceof l.FormData),
              !H(pa, n) ||
                r ||
                i ||
                a.set(
                  "Content-Type",
                  "application/x-www-form-urlencoded;charset=utf-8"
                ),
              a.forEach(function (t, e) {
                this.a.setRequestHeader(e, t)
              }, e),
              e.m && (e.a.responseType = e.m),
              "withCredentials" in e.a &&
                e.a.withCredentials !== e.R &&
                (e.a.withCredentials = e.R)
            try {
              Ia(e),
                0 < e.g &&
                  ((e.w =
                    ((o = e.a),
                    Ht &&
                      Qt(9) &&
                      "number" == typeof o.timeout &&
                      void 0 !== o.ontimeout)),
                  ra(
                    e.b,
                    Aa(
                      e,
                      "Will abort after " +
                        e.g +
                        "ms if incomplete, xhr2 " +
                        e.w
                    )
                  ),
                  e.w
                    ? ((e.a.timeout = e.g), (e.a.ontimeout = b(e.Ka, e)))
                    : (e.s = bn(e.Ka, e.g, e))),
                ra(e.b, Aa(e, "Sending request")),
                (e.i = !0),
                e.a.send(t),
                (e.i = !1)
            } catch (t) {
              ra(e.b, Aa(e, "Send error: " + t.message)), ga(e, t)
            }
          }
          function ma(t) {
            return "content-type" == t.toLowerCase()
          }
          function ga(t, e) {
            ;(t.c = !1),
              t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
              (t.h = e),
              ba(t),
              wa(t)
          }
          function ba(t) {
            t.N ||
              ((t.N = !0),
              t.dispatchEvent("complete"),
              t.dispatchEvent("error"))
          }
          function ya(e) {
            if (e.c && void 0 !== u)
              if (e.B[1] && 4 == Ta(e) && 2 == Ea(e))
                ra(e.b, Aa(e, "Local request error detected and ignored"))
              else if (e.i && 4 == Ta(e)) bn(e.Sb, 0, e)
              else if ((e.dispatchEvent("readystatechange"), 4 == Ta(e))) {
                ra(e.b, Aa(e, "Request complete")), (e.c = !1)
                try {
                  var t,
                    n = Ea(e)
                  t: switch (n) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                      var i = !0
                      break t
                    default:
                      i = !1
                  }
                  if (!(t = i)) {
                    var r
                    if ((r = 0 === n)) {
                      var o = String(e.l).match(kn)[1] || null
                      if (!o && l.self && l.self.location) {
                        var a = l.self.location.protocol
                        o = a.substr(0, a.length - 1)
                      }
                      r = !da.test(o ? o.toLowerCase() : "")
                    }
                    t = r
                  }
                  if (t) e.dispatchEvent("complete"), e.dispatchEvent("success")
                  else {
                    try {
                      var s = 2 < Ta(e) ? e.a.statusText : ""
                    } catch (t) {
                      ra(e.b, "Can not get status: " + t.message), (s = "")
                    }
                    ;(e.h = s + " [" + Ea(e) + "]"), ba(e)
                  }
                } finally {
                  wa(e)
                }
              }
          }
          function wa(e, t) {
            if (e.a) {
              Ia(e)
              var n = e.a,
                i = e.B[0] ? s : null
              ;(e.a = null), (e.B = null), t || e.dispatchEvent("ready")
              try {
                n.onreadystatechange = i
              } catch (t) {
                ;(e = e.b) &&
                  e.log(
                    zo,
                    "Problem encountered resetting onreadystatechange: " +
                      t.message,
                    void 0
                  )
              }
            }
          }
          function Ia(t) {
            t.a && t.w && (t.a.ontimeout = null),
              t.s && (l.clearTimeout(t.s), (t.s = null))
          }
          function Ta(t) {
            return t.a ? t.a.readyState : 0
          }
          function Ea(t) {
            try {
              return 2 < Ta(t) ? t.a.status : -1
            } catch (t) {
              return -1
            }
          }
          function Aa(t, e) {
            return e + " [" + t.P + " " + t.l + " " + Ea(t) + "]"
          }
          function ka(t) {
            var e = xa
            ;(this.g = []),
              (this.w = e),
              (this.s = t || null),
              (this.f = this.a = !1),
              (this.c = void 0),
              (this.u = this.B = this.i = !1),
              (this.h = 0),
              (this.b = null),
              (this.l = 0)
          }
          function Sa(t, e, n) {
            ;(t.a = !0), (t.c = n), (t.f = !e), Ra(t)
          }
          function Na(t) {
            if (t.a) {
              if (!t.u) throw new Ca()
              t.u = !1
            }
          }
          function _a(t, e, n, i) {
            t.g.push([e, n, i]), t.a && Ra(t)
          }
          function Oa(t) {
            return q(t.g, function (t) {
              return p(t[1])
            })
          }
          function Ra(e) {
            if (e.h && e.a && Oa(e)) {
              var n = e.h,
                i = La[n]
              i && (l.clearTimeout(i.a), delete La[n]), (e.h = 0)
            }
            e.b && (e.b.l--, delete e.b), (n = e.c)
            for (var t = (i = !1); e.g.length && !e.i; ) {
              var r = e.g.shift(),
                o = r[0],
                a = r[1]
              if (((r = r[2]), (o = e.f ? a : o)))
                try {
                  var s = o.call(r || e.s, n)
                  void 0 !== s &&
                    ((e.f = e.f && (s == n || s instanceof Error)),
                    (e.c = n = s)),
                    (_(n) ||
                      ("function" == typeof l.Promise &&
                        n instanceof l.Promise)) &&
                      ((t = !0), (e.i = !0))
                } catch (t) {
                  ;(n = t), (e.f = !0), Oa(e) || (i = !0)
                }
            }
            ;(e.c = n),
              t &&
                ((s = b(e.m, e, !0)),
                (t = b(e.m, e, !1)),
                n instanceof ka ? (_a(n, s, t), (n.B = !0)) : n.then(s, t)),
              i && ((n = new Pa(n)), (La[n.a] = n), (e.h = n.a))
          }
          function Ca() {
            O.call(this)
          }
          function Da() {
            O.call(this)
          }
          function Pa(t) {
            ;(this.a = l.setTimeout(b(this.c, this), 0)), (this.b = t)
          }
          ;((t = la.prototype).Ka = function () {
            void 0 !== u &&
              this.a &&
              ((this.h = "Timed out after " + this.g + "ms, aborting"),
              ra(this.b, Aa(this, this.h)),
              this.dispatchEvent("timeout"),
              this.abort(8))
          }),
            (t.abort = function () {
              this.a &&
                this.c &&
                (ra(this.b, Aa(this, "Aborting")),
                (this.c = !1),
                (this.f = !0),
                this.a.abort(),
                (this.f = !1),
                this.dispatchEvent("complete"),
                this.dispatchEvent("abort"),
                wa(this))
            }),
            (t.Ba = function () {
              this.a &&
                (this.c &&
                  ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
                wa(this, !0)),
                la.Za.Ba.call(this)
            }),
            (t.Sb = function () {
              this.wa || (this.O || this.i || this.f ? ya(this) : this.Hc())
            }),
            (t.Hc = function () {
              ya(this)
            }),
            (t.getResponse = function () {
              try {
                if (!this.a) return null
                if ("response" in this.a) return this.a.response
                switch (this.m) {
                  case fa:
                  case "text":
                    return this.a.responseText
                  case "arraybuffer":
                    if ("mozResponseArrayBuffer" in this.a)
                      return this.a.mozResponseArrayBuffer
                }
                var t = this.b
                return (
                  t &&
                    t.log(
                      zo,
                      "Response type " +
                        this.m +
                        " is not supported on this browser",
                      void 0
                    ),
                  null
                )
              } catch (t) {
                return ra(this.b, "Can not get response: " + t.message), null
              }
            }),
            (ka.prototype.cancel = function (t) {
              if (this.a) this.c instanceof ka && this.c.cancel()
              else {
                if (this.b) {
                  var e = this.b
                  delete this.b,
                    t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())
                }
                this.w ? this.w.call(this.s, this) : (this.u = !0),
                  this.a || ((t = new Da()), Na(this), Sa(this, !1, t))
              }
            }),
            (ka.prototype.m = function (t, e) {
              ;(this.i = !1), Sa(this, t, e)
            }),
            (ka.prototype.then = function (t, e, n) {
              var i,
                r,
                o = new ve(function (t, e) {
                  ;(i = t), (r = e)
                })
              return (
                _a(this, i, function (t) {
                  t instanceof Da ? o.cancel() : r(t)
                }),
                o.then(t, e, n)
              )
            }),
            (ka.prototype.$goog_Thenable = !0),
            e(Ca, O),
            (Ca.prototype.message = "Deferred has already fired"),
            (Ca.prototype.name = "AlreadyCalledError"),
            e(Da, O),
            (Da.prototype.message = "Deferred was canceled"),
            (Da.prototype.name = "CanceledError"),
            (Pa.prototype.c = function () {
              throw (delete La[this.a], this.b)
            })
          var La = {}
          function Ma(t) {
            var e,
              n,
              i,
              r,
              o,
              a = document,
              s = yt(t).toString(),
              u = se(document, "SCRIPT"),
              c = { Tb: u, Ka: void 0 },
              h = new ka(c)
            return (
              (e = window.setTimeout(function () {
                ja(u, !0)
                var t = new Fa(Va, "Timeout reached for loading script " + s)
                Na(h), Sa(h, !1, t)
              }, 5e3)),
              (c.Ka = e),
              (u.onload = u.onreadystatechange = function () {
                ;(u.readyState &&
                  "loaded" != u.readyState &&
                  "complete" != u.readyState) ||
                  (ja(u, !1, e), Na(h), Sa(h, !0, null))
              }),
              (u.onerror = function () {
                ja(u, !0, e)
                var t = new Fa(Ua, "Error while loading script " + s)
                Na(h), Sa(h, !1, t)
              }),
              lt((c = {}), { type: "text/javascript", charset: "UTF-8" }),
              ne(u, c),
              (i = t),
              ft((n = u), "HTMLScriptElement"),
              (n.src = yt(i)),
              null === d &&
                (d =
                  (i =
                    (i = l.document).querySelector &&
                    i.querySelector("script[nonce]")) &&
                  (i = i.nonce || i.getAttribute("nonce")) &&
                  f.test(i)
                    ? i
                    : ""),
              (i = d) && n.setAttribute("nonce", i),
              ((o = ((r = a) || document).getElementsByTagName("HEAD")) &&
              0 != o.length
                ? o[0]
                : r.documentElement
              ).appendChild(u),
              h
            )
          }
          function xa() {
            if (this && this.Tb) {
              var t = this.Tb
              t && "SCRIPT" == t.tagName && ja(t, !0, this.Ka)
            }
          }
          function ja(t, e, n) {
            null != n && l.clearTimeout(n),
              (t.onload = s),
              (t.onerror = s),
              (t.onreadystatechange = s),
              e &&
                window.setTimeout(function () {
                  t && t.parentNode && t.parentNode.removeChild(t)
                }, 0)
          }
          var Ua = 0,
            Va = 1
          function Fa(t, e) {
            var n = "Jsloader error (code #" + t + ")"
            e && (n += ": " + e), O.call(this, n), (this.code = t)
          }
          function qa(t) {
            this.f = t
          }
          function Ha(t, e, n) {
            if (
              ((this.c = t),
              (t = e || {}),
              (this.u =
                t.secureTokenEndpoint ||
                "https://securetoken.googleapis.com/v1/token"),
              (this.m = t.secureTokenTimeout || Ba),
              (this.g = ct(t.secureTokenHeaders || Wa)),
              (this.h =
                t.firebaseEndpoint ||
                "https://www.googleapis.com/identitytoolkit/v3/relyingparty/"),
              (this.l =
                t.identityPlatformEndpoint ||
                "https://identitytoolkit.googleapis.com/v2/"),
              (this.i = t.firebaseTimeout || Xa),
              (this.a = ct(t.firebaseHeaders || Ja)),
              n &&
                ((this.a["X-Client-Version"] = n),
                (this.g["X-Client-Version"] = n)),
              (n = "Node" == di()),
              !(n =
                l.XMLHttpRequest ||
                (n && Xl.INTERNAL.node && Xl.INTERNAL.node.XMLHttpRequest)) &&
                !fi())
            )
              throw new I(
                "internal-error",
                "The XMLHttpRequest compatibility library was not found."
              )
            ;(this.f = void 0),
              fi()
                ? (this.f = new oa(self))
                : pi()
                ? (this.f = new qa(n))
                : (this.f = new Go()),
              (this.b = null)
          }
          e(Fa, O),
            e(qa, Fo),
            (qa.prototype.a = function () {
              return new this.f()
            }),
            (qa.prototype.b = function () {
              return {}
            })
          var Ka,
            Ga = "idToken",
            Ba = new Pi(3e4, 6e4),
            Wa = { "Content-Type": "application/x-www-form-urlencoded" },
            Xa = new Pi(3e4, 6e4),
            Ja = { "Content-Type": "application/json" }
          function Ya(t, e) {
            e ? (t.a["X-Firebase-Locale"] = e) : delete t.a["X-Firebase-Locale"]
          }
          function za(t, e) {
            e
              ? ((t.a["X-Client-Version"] = e), (t.g["X-Client-Version"] = e))
              : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"])
          }
          function $a(t, e, n, i, r, o, a) {
            var s
            ;(t =
              !(
                ((s =
                  gi((s = wi())) == mi &&
                  (s = s.match(/\sChrome\/(\d+)/i)) &&
                  2 == s.length
                    ? parseInt(s[1], 10)
                    : null) &&
                  s < 30) ||
                (Ht && $t && !(9 < $t))
              ) || fi()
                ? b(t.w, t)
                : ((Ka =
                    Ka ||
                    new ve(function (t, e) {
                      !(function (t, e) {
                        if (((window.gapi || {}).client || {}).request) t()
                        else {
                          ;(l[Qa] = function () {
                            ;((window.gapi || {}).client || {}).request
                              ? t()
                              : e(Error("CORS_UNSUPPORTED"))
                          }),
                            (function (t, e) {
                              _a(t, null, e, void 0)
                            })(Ma(wt(Za, { onload: Qa })), function () {
                              e(Error("CORS_UNSUPPORTED"))
                            })
                        }
                      })(t, e)
                    })),
                  b(t.s, t)))(e, n, i, r, o, a)
          }
          ;(Ha.prototype.S = function () {
            return this.b
          }),
            (Ha.prototype.w = function (t, n, e, i, r, o) {
              if (
                fi() &&
                (void 0 === l.fetch ||
                  void 0 === l.Headers ||
                  void 0 === l.Request)
              )
                throw new I(
                  "operation-not-supported-in-this-environment",
                  "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."
                )
              var a = new la(this.f)
              if (o) {
                a.g = Math.max(0, o)
                var s = setTimeout(function () {
                  a.dispatchEvent("timeout")
                }, o)
              }
              vn(a, "complete", function () {
                s && clearTimeout(s)
                var e = null
                try {
                  e =
                    JSON.parse(
                      (function (e) {
                        try {
                          return e.a ? e.a.responseText : ""
                        } catch (t) {
                          return (
                            ra(e.b, "Can not get responseText: " + t.message),
                            ""
                          )
                        }
                      })(this)
                    ) || null
                } catch (t) {
                  e = null
                }
                n && n(e)
              }),
                mn(a, "ready", function () {
                  s && clearTimeout(s), Ue(this)
                }),
                mn(a, "timeout", function () {
                  s && clearTimeout(s), Ue(this), n && n(null)
                }),
                va(a, t, e, i, r)
            })
          var Za = new dt(
              mt,
              "https://apis.google.com/js/client.js?onload=%{onload}"
            ),
            Qa = "__fcb" + Math.floor(1e6 * Math.random()).toString()
          function ts(t, e, n, i, r, o, a) {
            var s = Dn(e + n)
            Rn(s, "key", t.c), a && Rn(s, "cb", w().toString())
            var u = "GET" == i
            if (u) for (var c in r) r.hasOwnProperty(c) && Rn(s, c, r[c])
            return new ve(function (e, n) {
              $a(
                t,
                s.toString(),
                function (t) {
                  t
                    ? t.error
                      ? n(Ys(t, o || {}))
                      : e(t)
                    : n(new I("network-request-failed"))
                },
                i,
                u ? void 0 : zn(_i(r)),
                t.a,
                t.i.get()
              )
            })
          }
          function es(t) {
            if ("string" != typeof (t = t.email) || !ui.test(t))
              throw new I("invalid-email")
          }
          function ns(t) {
            "email" in t && es(t)
          }
          function is(t) {
            if (!t[Ga]) {
              if (t.mfaPendingCredential)
                throw new I("multi-factor-auth-required", null, ct(t))
              throw new I("internal-error")
            }
          }
          function rs(t) {
            if (t.phoneNumber || t.temporaryProof) {
              if (!t.phoneNumber || !t.temporaryProof)
                throw new I("internal-error")
            } else {
              if (!t.sessionInfo) throw new I("missing-verification-id")
              if (!t.code) throw new I("missing-verification-code")
            }
          }
          ;(Ha.prototype.s = function (t, n, i, r, o) {
            var a = this
            Ka.then(function () {
              window.gapi.client.setApiKey(a.c)
              var e = window.gapi.auth.getToken()
              window.gapi.auth.setToken(null),
                window.gapi.client.request({
                  path: t,
                  method: i,
                  body: r,
                  headers: o,
                  authType: "none",
                  callback: function (t) {
                    window.gapi.auth.setToken(e), n && n(t)
                  },
                })
            }).o(function (t) {
              n &&
                n({
                  error: { message: (t && t.message) || "CORS_UNSUPPORTED" },
                })
            })
          }),
            (Ha.prototype.vb = function () {
              return Xs(this, Ms, {})
            }),
            (Ha.prototype.xb = function (t, e) {
              return Xs(this, Ps, { idToken: t, email: e })
            }),
            (Ha.prototype.yb = function (t, e) {
              return Xs(this, Ls, { idToken: t, password: e })
            })
          var os = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" }
          function as(t) {
            if (!t.phoneVerificationInfo) throw new I("internal-error")
            if (!t.phoneVerificationInfo.sessionInfo)
              throw new I("missing-verification-id")
            if (!t.phoneVerificationInfo.code)
              throw new I("missing-verification-code")
          }
          function ss(t) {
            if (
              !t.requestUri ||
              (!t.sessionId && !t.postBody && !t.pendingToken)
            )
              throw new I("internal-error")
          }
          function us(t, e) {
            return (
              e.oauthIdToken &&
                e.providerId &&
                0 == e.providerId.indexOf("oidc.") &&
                !e.pendingToken &&
                (t.sessionId
                  ? (e.nonce = t.sessionId)
                  : t.postBody &&
                    Wn((t = new Hn(t.postBody)), "nonce") &&
                    (e.nonce = t.get("nonce"))),
              e
            )
          }
          function cs(t) {
            var e = null
            if (
              (t.needConfirmation
                ? ((t.code = "account-exists-with-different-credential"),
                  (e = Vo(t)))
                : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage
                ? ((t.code = "credential-already-in-use"), (e = Vo(t)))
                : "EMAIL_EXISTS" == t.errorMessage
                ? ((t.code = "email-already-in-use"), (e = Vo(t)))
                : t.errorMessage && (e = Js(t.errorMessage)),
              e)
            )
              throw e
            is(t)
          }
          function hs(t, e) {
            return (e.returnIdpCredential = !0), Xs(t, Us, e)
          }
          function ls(t, e) {
            return (e.returnIdpCredential = !0), Xs(t, Fs, e)
          }
          function fs(t, e) {
            return (
              (e.returnIdpCredential = !0), (e.autoCreate = !1), Xs(t, Vs, e)
            )
          }
          function ds(t) {
            if (!t.oobCode) throw new I("invalid-action-code")
          }
          ;((t = Ha.prototype).zb = function (t, i) {
            var r = { idToken: t },
              o = []
            return (
              st(os, function (t, e) {
                var n = i[e]
                null === n ? o.push(t) : e in i && (r[e] = n)
              }),
              o.length && (r.deleteAttribute = o),
              Xs(this, Ps, r)
            )
          }),
            (t.rb = function (t, e) {
              return (
                lt((t = { requestType: "PASSWORD_RESET", email: t }), e),
                Xs(this, _s, t)
              )
            }),
            (t.sb = function (t, e) {
              return (
                lt((t = { requestType: "EMAIL_SIGNIN", email: t }), e),
                Xs(this, ks, t)
              )
            }),
            (t.qb = function (t, e) {
              return (
                lt((t = { requestType: "VERIFY_EMAIL", idToken: t }), e),
                Xs(this, Ss, t)
              )
            }),
            (t.Ab = function (t, e, n) {
              return (
                lt(
                  (t = {
                    requestType: "VERIFY_AND_CHANGE_EMAIL",
                    idToken: t,
                    newEmail: e,
                  }),
                  n
                ),
                Xs(this, Ns, t)
              )
            }),
            (t.cb = function (t) {
              return Xs(this, Ks, t)
            }),
            (t.jb = function (t, e) {
              return Xs(this, Cs, { oobCode: t, newPassword: e })
            }),
            (t.Pa = function (t) {
              return Xs(this, vs, { oobCode: t })
            }),
            (t.fb = function (t) {
              return Xs(this, ps, { oobCode: t })
            })
          var ps = { endpoint: "setAccountInfo", A: ds, Y: "email", C: !0 },
            vs = {
              endpoint: "resetPassword",
              A: ds,
              G: function (t) {
                var e = t.requestType
                if (
                  !e ||
                  (!t.email &&
                    "EMAIL_SIGNIN" != e &&
                    "VERIFY_AND_CHANGE_EMAIL" != e)
                )
                  throw new I("internal-error")
              },
              C: !0,
            },
            ms = {
              endpoint: "signupNewUser",
              A: function (t) {
                if ((es(t), !t.password)) throw new I("weak-password")
              },
              G: is,
              U: !0,
              C: !0,
            },
            gs = { endpoint: "createAuthUri", C: !0 },
            bs = { endpoint: "deleteAccount", M: ["idToken"] },
            ys = {
              endpoint: "setAccountInfo",
              M: ["idToken", "deleteProvider"],
              A: function (t) {
                if ("array" != n(t.deleteProvider))
                  throw new I("internal-error")
              },
            },
            ws = {
              endpoint: "emailLinkSignin",
              M: ["email", "oobCode"],
              A: es,
              G: is,
              U: !0,
              C: !0,
            },
            Is = {
              endpoint: "emailLinkSignin",
              M: ["idToken", "email", "oobCode"],
              A: es,
              G: is,
              U: !0,
            },
            Ts = {
              endpoint: "accounts/mfaEnrollment:finalize",
              M: ["idToken", "phoneVerificationInfo"],
              A: as,
              G: is,
              C: !0,
              La: !0,
            },
            Es = {
              endpoint: "accounts/mfaSignIn:finalize",
              M: ["mfaPendingCredential", "phoneVerificationInfo"],
              A: as,
              G: is,
              C: !0,
              La: !0,
            },
            As = { endpoint: "getAccountInfo" },
            ks = {
              endpoint: "getOobConfirmationCode",
              M: ["requestType"],
              A: function (t) {
                if ("EMAIL_SIGNIN" != t.requestType)
                  throw new I("internal-error")
                es(t)
              },
              Y: "email",
              C: !0,
            },
            Ss = {
              endpoint: "getOobConfirmationCode",
              M: ["idToken", "requestType"],
              A: function (t) {
                if ("VERIFY_EMAIL" != t.requestType)
                  throw new I("internal-error")
              },
              Y: "email",
              C: !0,
            },
            Ns = {
              endpoint: "getOobConfirmationCode",
              M: ["idToken", "newEmail", "requestType"],
              A: function (t) {
                if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType)
                  throw new I("internal-error")
              },
              Y: "email",
              C: !0,
            },
            _s = {
              endpoint: "getOobConfirmationCode",
              M: ["requestType"],
              A: function (t) {
                if ("PASSWORD_RESET" != t.requestType)
                  throw new I("internal-error")
                es(t)
              },
              Y: "email",
              C: !0,
            },
            Os = { hb: !0, endpoint: "getProjectConfig", Rb: "GET" },
            Rs = {
              hb: !0,
              endpoint: "getRecaptchaParam",
              Rb: "GET",
              G: function (t) {
                if (!t.recaptchaSiteKey) throw new I("internal-error")
              },
            },
            Cs = { endpoint: "resetPassword", A: ds, Y: "email", C: !0 },
            Ds = {
              endpoint: "sendVerificationCode",
              M: ["phoneNumber", "recaptchaToken"],
              Y: "sessionInfo",
              C: !0,
            },
            Ps = { endpoint: "setAccountInfo", M: ["idToken"], A: ns, U: !0 },
            Ls = {
              endpoint: "setAccountInfo",
              M: ["idToken"],
              A: function (t) {
                if ((ns(t), !t.password)) throw new I("weak-password")
              },
              G: is,
              U: !0,
            },
            Ms = { endpoint: "signupNewUser", G: is, U: !0, C: !0 },
            xs = {
              endpoint: "accounts/mfaEnrollment:start",
              M: ["idToken", "phoneEnrollmentInfo"],
              A: function (t) {
                if (!t.phoneEnrollmentInfo) throw new I("internal-error")
                if (!t.phoneEnrollmentInfo.phoneNumber)
                  throw new I("missing-phone-number")
                if (!t.phoneEnrollmentInfo.recaptchaToken)
                  throw new I("missing-app-credential")
              },
              G: function (t) {
                if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
                  throw new I("internal-error")
              },
              C: !0,
              La: !0,
            },
            js = {
              endpoint: "accounts/mfaSignIn:start",
              M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
              A: function (t) {
                if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
                  throw new I("missing-app-credential")
              },
              G: function (t) {
                if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
                  throw new I("internal-error")
              },
              C: !0,
              La: !0,
            },
            Us = {
              endpoint: "verifyAssertion",
              A: ss,
              Wa: us,
              G: cs,
              U: !0,
              C: !0,
            },
            Vs = {
              endpoint: "verifyAssertion",
              A: ss,
              Wa: us,
              G: function (t) {
                if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage)
                  throw new I("user-not-found")
                if (t.errorMessage) throw Js(t.errorMessage)
                is(t)
              },
              U: !0,
              C: !0,
            },
            Fs = {
              endpoint: "verifyAssertion",
              A: function (t) {
                if ((ss(t), !t.idToken)) throw new I("internal-error")
              },
              Wa: us,
              G: cs,
              U: !0,
            },
            qs = {
              endpoint: "verifyCustomToken",
              A: function (t) {
                if (!t.token) throw new I("invalid-custom-token")
              },
              G: is,
              U: !0,
              C: !0,
            },
            Hs = {
              endpoint: "verifyPassword",
              A: function (t) {
                if ((es(t), !t.password)) throw new I("wrong-password")
              },
              G: is,
              U: !0,
              C: !0,
            },
            Ks = { endpoint: "verifyPhoneNumber", A: rs, G: is, C: !0 },
            Gs = {
              endpoint: "verifyPhoneNumber",
              A: function (t) {
                if (!t.idToken) throw new I("internal-error")
                rs(t)
              },
              G: function (t) {
                if (t.temporaryProof)
                  throw ((t.code = "credential-already-in-use"), Vo(t))
                is(t)
              },
            },
            Bs = {
              Eb: { USER_NOT_FOUND: "user-not-found" },
              endpoint: "verifyPhoneNumber",
              A: rs,
              G: is,
              C: !0,
            },
            Ws = {
              endpoint: "accounts/mfaEnrollment:withdraw",
              M: ["idToken", "mfaEnrollmentId"],
              G: function (t) {
                if (!!t[Ga] ^ !!t.refreshToken) throw new I("internal-error")
              },
              C: !0,
              La: !0,
            }
          function Xs(t, e, n) {
            if (
              !(function (t, e) {
                if (!e || !e.length) return 1
                if (t) {
                  for (var n = 0; n < e.length; n++) {
                    var i = t[e[n]]
                    if (null == i || "" === i) return
                  }
                  return 1
                }
              })(n, e.M)
            )
              return Ee(new I("internal-error"))
            var i,
              r = !!e.La,
              o = e.Rb || "POST"
            return Te(n)
              .then(e.A)
              .then(function () {
                return (
                  e.U && (n.returnSecureToken = !0),
                  e.C && t.b && void 0 === n.tenantId && (n.tenantId = t.b),
                  ts(t, r ? t.l : t.h, e.endpoint, o, n, e.Eb, e.hb || !1)
                )
              })
              .then(function (t) {
                return (i = t), e.Wa ? e.Wa(n, i) : i
              })
              .then(e.G)
              .then(function () {
                if (!e.Y) return i
                if (!(e.Y in i)) throw new I("internal-error")
                return i[e.Y]
              })
          }
          function Js(t) {
            return Ys({
              error: { errors: [{ message: t }], code: 400, message: t },
            })
          }
          function Ys(t, e) {
            var n =
                ((t.error && t.error.errors && t.error.errors[0]) || {})
                  .reason || "",
              i = {
                keyInvalid: "invalid-api-key",
                ipRefererBlocked: "app-not-authorized",
              }
            if ((n = i[n] ? new I(i[n]) : null)) return n
            for (var r in ((n = (t.error && t.error.message) || ""),
            lt(
              (i = {
                INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                MISSING_CUSTOM_TOKEN: "internal-error",
                INVALID_IDENTIFIER: "invalid-email",
                MISSING_CONTINUE_URI: "internal-error",
                INVALID_EMAIL: "invalid-email",
                INVALID_PASSWORD: "wrong-password",
                USER_DISABLED: "user-disabled",
                MISSING_PASSWORD: "internal-error",
                EMAIL_EXISTS: "email-already-in-use",
                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                INVALID_IDP_RESPONSE: "invalid-credential",
                INVALID_PENDING_TOKEN: "invalid-credential",
                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                INVALID_SENDER: "invalid-sender",
                EMAIL_NOT_FOUND: "user-not-found",
                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                EXPIRED_OOB_CODE: "expired-action-code",
                INVALID_OOB_CODE: "invalid-action-code",
                MISSING_OOB_CODE: "internal-error",
                INVALID_PROVIDER_ID: "invalid-provider-id",
                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                INVALID_ID_TOKEN: "invalid-user-token",
                TOKEN_EXPIRED: "user-token-expired",
                USER_NOT_FOUND: "user-token-expired",
                CORS_UNSUPPORTED: "cors-unsupported",
                DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                INVALID_APP_ID: "invalid-app-id",
                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                WEAK_PASSWORD: "weak-password",
                OPERATION_NOT_ALLOWED: "operation-not-allowed",
                USER_CANCELLED: "user-cancelled",
                CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                INVALID_APP_CREDENTIAL: "invalid-app-credential",
                INVALID_CODE: "invalid-verification-code",
                INVALID_PHONE_NUMBER: "invalid-phone-number",
                INVALID_SESSION_INFO: "invalid-verification-id",
                INVALID_TEMPORARY_PROOF: "invalid-credential",
                MISSING_APP_CREDENTIAL: "missing-app-credential",
                MISSING_CODE: "missing-verification-code",
                MISSING_PHONE_NUMBER: "missing-phone-number",
                MISSING_SESSION_INFO: "missing-verification-id",
                QUOTA_EXCEEDED: "quota-exceeded",
                SESSION_EXPIRED: "code-expired",
                REJECTED_CREDENTIAL: "rejected-credential",
                INVALID_CONTINUE_URI: "invalid-continue-uri",
                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                INVALID_CERT_HASH: "invalid-cert-hash",
                UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                INVALID_TENANT_ID: "invalid-tenant-id",
                TENANT_ID_MISMATCH: "tenant-id-mismatch",
                ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                EMAIL_CHANGE_NEEDS_VERIFICATION:
                  "email-change-needs-verification",
                SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                SECOND_FACTOR_LIMIT_EXCEEDED:
                  "maximum-second-factor-count-exceeded",
                UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                UNVERIFIED_EMAIL: "unverified-email",
              }),
              e || {}
            ),
            (e =
              (e = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length
                ? e[1]
                : void 0),
            i))
              if (0 === n.indexOf(r)) return new I(i[r], e)
            return !e && t && (e = Ni(t)), new I("internal-error", e)
          }
          function zs(t) {
            var o
            ;(this.b = t),
              (this.a = null),
              (this.nb =
                ((o = this),
                (tu =
                  tu ||
                  new ve(function (t, e) {
                    function n() {
                      Di(),
                        Ii("gapi.load")("gapi.iframes", {
                          callback: t,
                          ontimeout: function () {
                            Di(), e(Error("Network Error"))
                          },
                          timeout: Zs.get(),
                        })
                    }
                    if (Ii("gapi.iframes.Iframe")) t()
                    else if (Ii("gapi.load")) n()
                    else {
                      var i =
                        "__iframefcb" +
                        Math.floor(1e6 * Math.random()).toString()
                      ;(l[i] = function () {
                        Ii("gapi.load") ? n() : e(Error("Network Error"))
                      }),
                        Te(Ma((i = wt($s, { onload: i })))).o(function () {
                          e(Error("Network Error"))
                        })
                    }
                  }).o(function (t) {
                    throw ((tu = null), t)
                  })).then(function () {
                  return new ve(function (i, r) {
                    Ii("gapi.iframes.getContext")().open(
                      {
                        where: document.body,
                        url: o.b,
                        messageHandlersFilter: Ii(
                          "gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"
                        ),
                        attributes: {
                          style: {
                            position: "absolute",
                            top: "-100px",
                            width: "1px",
                            height: "1px",
                          },
                        },
                        dontclear: !0,
                      },
                      function (t) {
                        function e() {
                          clearTimeout(n), i()
                        }
                        ;(o.a = t), o.a.restyle({ setHideOnLeave: !1 })
                        var n = setTimeout(function () {
                          r(Error("Network Error"))
                        }, Qs.get())
                        t.ping(e).then(e, function () {
                          r(Error("Network Error"))
                        })
                      }
                    )
                  })
                })))
          }
          var $s = new dt(
              mt,
              "https://apis.google.com/js/api.js?onload=%{onload}"
            ),
            Zs = new Pi(3e4, 6e4),
            Qs = new Pi(5e3, 15e3),
            tu = null
          function eu(t, e, n) {
            ;(this.i = t),
              (this.g = e),
              (this.h = n),
              (this.f = null),
              (this.a = Pn(this.i, "/__/auth/iframe")),
              Rn(this.a, "apiKey", this.g),
              Rn(this.a, "appName", this.h),
              (this.b = null),
              (this.c = [])
          }
          function nu(t, e, n, i, r) {
            ;(this.s = t),
              (this.m = e),
              (this.c = n),
              (this.u = i),
              (this.i = this.g = this.l = null),
              (this.a = r),
              (this.h = this.f = null)
          }
          function iu(t) {
            try {
              return Xl.app(t).auth().Ea()
            } catch (t) {
              return []
            }
          }
          function ru(t, e, n, i, r) {
            ;(this.u = t),
              (this.f = e),
              (this.b = n),
              (this.c = i || null),
              (this.h = r || null),
              (this.m = this.s = this.w = null),
              (this.g = []),
              (this.l = this.a = null)
          }
          function ou(t) {
            var s = ni()
            return Xs(t, Os, {})
              .then(function (t) {
                return t.authorizedDomains || []
              })
              .then(function (t) {
                t: {
                  var e = Dn(s),
                    n = e.f
                  e = e.b
                  for (var i = 0; i < t.length; i++) {
                    var r = t[i],
                      o = e,
                      a = n
                    if (
                      (o =
                        0 == r.indexOf("chrome-extension://")
                          ? Dn(r).b == o && "chrome-extension" == a
                          : ("http" == a || "https" == a) &&
                            (si.test(r)
                              ? o == r
                              : ((r = r.split(".").join("\\.")),
                                new RegExp(
                                  "^(.+\\." + r + "|" + r + ")$",
                                  "i"
                                ).test(o))))
                    ) {
                      t = !0
                      break t
                    }
                  }
                  t = !1
                }
                if (!t) throw new jo(ni())
              })
          }
          function au(r) {
            return (
              r.l ||
                (r.l = ci().then(function () {
                  if (!r.s) {
                    var t = r.c,
                      e = r.h,
                      n = iu(r.b),
                      i = new eu(r.u, r.f, r.b)
                    ;(i.f = t),
                      (i.b = e),
                      (i.c = W(n || [])),
                      (r.s = i.toString())
                  }
                  ;(r.i = new zs(r.s)),
                    (function (i) {
                      if (!i.i) throw Error("IfcHandler must be initialized!")
                      !(function (t, e) {
                        t.nb.then(function () {
                          t.a.register(
                            "authEvent",
                            e,
                            Ii("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                          )
                        })
                      })(i.i, function (t) {
                        var e = {}
                        if (t && t.authEvent) {
                          var n = !1
                          for (t = Po(t.authEvent), e = 0; e < i.g.length; e++)
                            n = i.g[e](t) || n
                          return ((e = {}).status = n ? "ACK" : "ERROR"), Te(e)
                        }
                        return (e.status = "ERROR"), Te(e)
                      })
                    })(r)
                })),
              r.l
            )
          }
          function su(t) {
            return (
              t.m ||
                ((t.w = t.c ? yi(t.c, iu(t.b)) : null),
                (t.m = new Ha(t.f, N(t.h), t.w))),
              t.m
            )
          }
          function uu(t, e, n, i, r, o, a, s, u, c, h) {
            return (
              ((t = new nu(t, e, n, i, r)).l = o),
              (t.g = a),
              (t.i = s),
              (t.b = ct(u || null)),
              (t.f = c),
              t.ub(h).toString()
            )
          }
          function cu(t) {
            if (
              ((this.a =
                t ||
                (Xl.INTERNAL.reactNative &&
                  Xl.INTERNAL.reactNative.AsyncStorage)),
              !this.a)
            )
              throw new I(
                "internal-error",
                "The React Native compatibility library was not found."
              )
            this.type = "asyncStorage"
          }
          function hu(t) {
            ;(this.b = t), (this.a = {}), (this.f = b(this.c, this))
          }
          ;(eu.prototype.toString = function () {
            return (
              this.f ? Rn(this.a, "v", this.f) : Bn(this.a.a, "v"),
              this.b ? Rn(this.a, "eid", this.b) : Bn(this.a.a, "eid"),
              this.c.length
                ? Rn(this.a, "fw", this.c.join(","))
                : Bn(this.a.a, "fw"),
              this.a.toString()
            )
          }),
            (nu.prototype.ub = function (t) {
              return (this.h = t), this
            }),
            (nu.prototype.toString = function () {
              var t = Pn(this.s, "/__/auth/handler")
              if (
                (Rn(t, "apiKey", this.m),
                Rn(t, "appName", this.c),
                Rn(t, "authType", this.u),
                this.a.isOAuthProvider)
              ) {
                var e = this.a
                try {
                  var n = Xl.app(this.c).auth().ja()
                } catch (t) {
                  n = null
                }
                for (var i in ((e.kb = n),
                Rn(t, "providerId", this.a.providerId),
                (n = _i((e = this.a).Fb))))
                  n[i] = n[i].toString()
                ;(i = e.Oc), (n = ct(n))
                for (var r = 0; r < i.length; r++) {
                  var o = i[r]
                  o in n && delete n[o]
                }
                e.lb && e.kb && !n[e.lb] && (n[e.lb] = e.kb),
                  ut(n) || Rn(t, "customParameters", Ni(n))
              }
              if (
                ("function" == typeof this.a.Nb &&
                  (e = this.a.Nb()).length &&
                  Rn(t, "scopes", e.join(",")),
                this.l ? Rn(t, "redirectUrl", this.l) : Bn(t.a, "redirectUrl"),
                this.g ? Rn(t, "eventId", this.g) : Bn(t.a, "eventId"),
                this.i ? Rn(t, "v", this.i) : Bn(t.a, "v"),
                this.b)
              )
                for (var a in this.b)
                  this.b.hasOwnProperty(a) && !Cn(t, a) && Rn(t, a, this.b[a])
              return (
                this.h ? Rn(t, "tid", this.h) : Bn(t.a, "tid"),
                this.f ? Rn(t, "eid", this.f) : Bn(t.a, "eid"),
                (a = iu(this.c)).length && Rn(t, "fw", a.join(",")),
                t.toString()
              )
            }),
            ((t = ru.prototype).Lb = function (e, n, t) {
              var i = new I("popup-closed-by-user"),
                r = new I("web-storage-unsupported"),
                o = this,
                a = !1
              return this.ka()
                .then(function () {
                  var t, i
                  ;(i = { type: "webStorageSupport" }),
                    au((t = o))
                      .then(function () {
                        return (
                          (e = t.i),
                          (n = i),
                          e.nb.then(function () {
                            return new ve(function (t) {
                              e.a.send(
                                n.type,
                                n,
                                t,
                                Ii("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                              )
                            })
                          })
                        )
                        var e, n
                      })
                      .then(function (t) {
                        if (t && t.length && void 0 !== t[0].webStorageSupport)
                          return t[0].webStorageSupport
                        throw Error()
                      })
                      .then(function (t) {
                        t || (e && oi(e), n(r), (a = !0))
                      })
                })
                .o(function () {})
                .then(function () {
                  if (!a)
                    return (
                      (n = e),
                      new ve(function (e) {
                        return (function t() {
                          yn(2e3).then(function () {
                            if (n && !n.closed) return t()
                            e()
                          })
                        })()
                      })
                    )
                  var n
                })
                .then(function () {
                  if (!a)
                    return yn(t).then(function () {
                      n(i)
                    })
                })
            }),
            (t.Ub = function () {
              var t = wi()
              return !Si(t) && !Ci(t)
            }),
            (t.Qb = function () {
              return !1
            }),
            (t.Jb = function (e, t, n, i, r, o, a, s) {
              if (!e) return Ee(new I("popup-blocked"))
              if (a && !Si())
                return (
                  this.ka().o(function (t) {
                    oi(e), r(t)
                  }),
                  i(),
                  Te()
                )
              this.a || (this.a = ou(su(this)))
              var u = this
              return this.a
                .then(function () {
                  var t = u.ka().o(function (t) {
                    throw (oi(e), r(t), t)
                  })
                  return i(), t
                })
                .then(function () {
                  Co(n),
                    a ||
                      ii(
                        uu(u.u, u.f, u.b, t, n, null, o, u.c, void 0, u.h, s),
                        e
                      )
                })
                .o(function (t) {
                  throw (
                    ("auth/network-request-failed" == t.code && (u.a = null), t)
                  )
                })
            }),
            (t.Kb = function (t, e, n, i) {
              this.a || (this.a = ou(su(this)))
              var r = this
              return this.a
                .then(function () {
                  Co(e),
                    ii(uu(r.u, r.f, r.b, t, e, ni(), n, r.c, void 0, r.h, i))
                })
                .o(function (t) {
                  throw (
                    ("auth/network-request-failed" == t.code && (r.a = null), t)
                  )
                })
            }),
            (t.ka = function () {
              var t = this
              return au(this)
                .then(function () {
                  return t.i.nb
                })
                .o(function () {
                  throw ((t.a = null), new I("network-request-failed"))
                })
            }),
            (t.Xb = function () {
              return !0
            }),
            (t.Ca = function (t) {
              this.g.push(t)
            }),
            (t.Qa = function (e) {
              G(this.g, function (t) {
                return t == e
              })
            }),
            ((t = cu.prototype).get = function (t) {
              return Te(this.a.getItem(t)).then(function (t) {
                return t && Oi(t)
              })
            }),
            (t.set = function (t, e) {
              return Te(this.a.setItem(t, Ni(e)))
            }),
            (t.T = function (t) {
              return Te(this.a.removeItem(t))
            }),
            (t.ba = function () {}),
            (t.ha = function () {})
          var lu,
            fu = []
          function du(t, e, n) {
            ut(t.a) && t.b.addEventListener("message", t.f),
              void 0 === t.a[e] && (t.a[e] = []),
              t.a[e].push(n)
          }
          function pu(t) {
            this.a = t
          }
          function vu(t) {
            ;(this.c = t), (this.b = !1), (this.a = [])
          }
          function mu(i, t, e, n) {
            var r,
              o,
              a,
              s,
              u = e || {},
              c = null
            if (i.b) return Ee(Error("connection_unavailable"))
            var h = n ? 800 : 50,
              l =
                "undefined" != typeof MessageChannel
                  ? new MessageChannel()
                  : null
            return new ve(function (e, n) {
              l
                ? ((r = Math.floor(
                    Math.random() * Math.pow(10, 20)
                  ).toString()),
                  l.port1.start(),
                  (a = setTimeout(function () {
                    n(Error("unsupported_event"))
                  }, h)),
                  (c = {
                    messageChannel: l,
                    onMessage: (o = function (t) {
                      t.data.eventId === r &&
                        ("ack" === t.data.status
                          ? (clearTimeout(a),
                            (s = setTimeout(function () {
                              n(Error("timeout"))
                            }, 3e3)))
                          : "done" === t.data.status
                          ? (clearTimeout(s),
                            void 0 !== t.data.response
                              ? e(t.data.response)
                              : n(Error("unknown_error")))
                          : (clearTimeout(a),
                            clearTimeout(s),
                            n(Error("invalid_response"))))
                    }),
                  }),
                  i.a.push(c),
                  l.port1.addEventListener("message", o),
                  i.c.postMessage({ eventType: t, eventId: r, data: u }, [
                    l.port2,
                  ]))
                : n(Error("connection_unavailable"))
            })
              .then(function (t) {
                return gu(i, c), t
              })
              .o(function (t) {
                throw (gu(i, c), t)
              })
          }
          function gu(t, e) {
            if (e) {
              var n = e.messageChannel,
                i = e.onMessage
              n && (n.port1.removeEventListener("message", i), n.port1.close()),
                G(t.a, function (t) {
                  return t == e
                })
            }
          }
          function bu() {
            if (!Iu()) throw new I("web-storage-unsupported")
            ;(this.c = {}),
              (this.a = []),
              (this.b = 0),
              (this.u = l.indexedDB),
              (this.type = "indexedDB"),
              (this.g = this.l = this.f = this.i = null),
              (this.s = !1),
              (this.h = null)
            var t,
              i = this
            fi() && self
              ? ((this.l = (function () {
                  var e = fi() ? self : null
                  if (
                    (U(fu, function (t) {
                      t.b == e && (n = t)
                    }),
                    !n)
                  ) {
                    var n = new hu(e)
                    fu.push(n)
                  }
                  return n
                })()),
                du(this.l, "keyChanged", function (t, n) {
                  return Su(i).then(function (e) {
                    return (
                      0 < e.length &&
                        U(i.a, function (t) {
                          t(e)
                        }),
                      { keyProcessed: H(e, n.key) }
                    )
                  })
                }),
                du(this.l, "ping", function () {
                  return Te(["keyChanged"])
                }))
              : ((t = l.navigator) && t.serviceWorker
                  ? Te()
                      .then(function () {
                        return t.serviceWorker.ready
                      })
                      .then(function (t) {
                        return t.active || null
                      })
                      .o(function () {
                        return null
                      })
                  : Te(null)
                ).then(function (t) {
                  ;(i.h = t) &&
                    ((i.g = new vu(new pu(t))),
                    mu(i.g, "ping", null, !0)
                      .then(function (t) {
                        t[0].fulfilled &&
                          H(t[0].value, "keyChanged") &&
                          (i.s = !0)
                      })
                      .o(function () {}))
                })
          }
          function yu(r) {
            return new ve(function (e, n) {
              var t = r.u.open("firebaseLocalStorageDb", 1)
              ;(t.onerror = function (t) {
                try {
                  t.preventDefault()
                } catch (t) {}
                n(Error(t.target.error))
              }),
                (t.onupgradeneeded = function (t) {
                  t = t.target.result
                  try {
                    t.createObjectStore("firebaseLocalStorage", {
                      keyPath: "fbase_key",
                    })
                  } catch (t) {
                    n(t)
                  }
                }),
                (t.onsuccess = function (t) {
                  var i
                  ;(t = t.target.result).objectStoreNames.contains(
                    "firebaseLocalStorage"
                  )
                    ? e(t)
                    : ((i = r),
                      new ve(function (t, e) {
                        var n = i.u.deleteDatabase("firebaseLocalStorageDb")
                        ;(n.onsuccess = function () {
                          t()
                        }),
                          (n.onerror = function (t) {
                            e(Error(t.target.error))
                          })
                      })
                        .then(function () {
                          return yu(r)
                        })
                        .then(function (t) {
                          e(t)
                        })
                        .o(function (t) {
                          n(t)
                        }))
                })
            })
          }
          function wu(t) {
            return t.m || (t.m = yu(t)), t.m
          }
          function Iu() {
            try {
              return l.indexedDB
            } catch (t) {
              return
            }
          }
          function Tu(t) {
            return t.objectStore("firebaseLocalStorage")
          }
          function Eu(t, e) {
            return t.transaction(
              ["firebaseLocalStorage"],
              e ? "readwrite" : "readonly"
            )
          }
          function Au(t) {
            return new ve(function (e, n) {
              ;(t.onsuccess = function (t) {
                t && t.target ? e(t.target.result) : e()
              }),
                (t.onerror = function (t) {
                  n(t.target.error)
                })
            })
          }
          function ku(t, e) {
            return t.g &&
              t.h &&
              (((n = l.navigator) &&
                n.serviceWorker &&
                n.serviceWorker.controller) ||
                null) === t.h
              ? mu(t.g, "keyChanged", { key: e }, t.s)
                  .then(function () {})
                  .o(function () {})
              : Te()
            var n
          }
          function Su(i) {
            return wu(i)
              .then(function (t) {
                var r = Tu(Eu(t, !1))
                return r.getAll
                  ? Au(r.getAll())
                  : new ve(function (e, n) {
                      var i = [],
                        t = r.openCursor()
                      ;(t.onsuccess = function (t) {
                        ;(t = t.target.result)
                          ? (i.push(t.value), t.continue())
                          : e(i)
                      }),
                        (t.onerror = function (t) {
                          n(t.target.error)
                        })
                    })
              })
              .then(function (t) {
                var e = {},
                  n = []
                if (0 == i.b) {
                  for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value
                  ;(n = (function t(e, n) {
                    var i,
                      r = []
                    for (i in e)
                      i in n && typeof e[i] == typeof n[i]
                        ? "object" == typeof e[i] &&
                          null != e[i] &&
                          null != n[i]
                          ? 0 < t(e[i], n[i]).length && r.push(i)
                          : e[i] !== n[i] && r.push(i)
                        : r.push(i)
                    for (i in n) i in e || r.push(i)
                    return r
                  })(i.c, e)),
                    (i.c = e)
                }
                return n
              })
          }
          function Nu(t) {
            t.i && t.i.cancel("STOP_EVENT"),
              t.f && (clearTimeout(t.f), (t.f = null))
          }
          function _u(t) {
            var i = this,
              r = null
            ;(this.a = []),
              (this.type = "indexedDB"),
              (this.c = t),
              (this.b = Te()
                .then(function () {
                  if (Iu()) {
                    var e = Ri(),
                      n = "__sak" + e
                    return (
                      (lu = lu || new bu()),
                      (r = lu)
                        .set(n, e)
                        .then(function () {
                          return r.get(n)
                        })
                        .then(function (t) {
                          if (t !== e) throw Error("indexedDB not supported!")
                          return r.T(n)
                        })
                        .then(function () {
                          return r
                        })
                        .o(function () {
                          return i.c
                        })
                    )
                  }
                  return i.c
                })
                .then(function (t) {
                  return (
                    (i.type = t.type),
                    t.ba(function (e) {
                      U(i.a, function (t) {
                        t(e)
                      })
                    }),
                    t
                  )
                }))
          }
          function Ou() {
            ;(this.a = {}), (this.type = "inMemory")
          }
          function Ru() {
            if (
              !(function () {
                var t = "Node" == di()
                if (
                  !(t =
                    Cu() ||
                    (t && Xl.INTERNAL.node && Xl.INTERNAL.node.localStorage))
                )
                  return
                try {
                  return t.setItem("__sak", "1"), t.removeItem("__sak"), 1
                } catch (t) {
                  return
                }
              })()
            ) {
              if ("Node" == di())
                throw new I(
                  "internal-error",
                  "The LocalStorage compatibility library was not found."
                )
              throw new I("web-storage-unsupported")
            }
            ;(this.a = Cu() || Xl.INTERNAL.node.localStorage),
              (this.type = "localStorage")
          }
          function Cu() {
            try {
              var t = l.localStorage,
                e = Ri()
              return t && (t.setItem(e, "1"), t.removeItem(e)), t
            } catch (t) {
              return null
            }
          }
          function Du() {
            this.type = "nullStorage"
          }
          function Pu() {
            if (
              !(function () {
                var t = "Node" == di()
                if (
                  !(t =
                    Lu() ||
                    (t && Xl.INTERNAL.node && Xl.INTERNAL.node.sessionStorage))
                )
                  return
                try {
                  return t.setItem("__sak", "1"), t.removeItem("__sak"), 1
                } catch (t) {
                  return
                }
              })()
            ) {
              if ("Node" == di())
                throw new I(
                  "internal-error",
                  "The SessionStorage compatibility library was not found."
                )
              throw new I("web-storage-unsupported")
            }
            ;(this.a = Lu() || Xl.INTERNAL.node.sessionStorage),
              (this.type = "sessionStorage")
          }
          function Lu() {
            try {
              var t = l.sessionStorage,
                e = Ri()
              return t && (t.setItem(e, "1"), t.removeItem(e)), t
            } catch (t) {
              return null
            }
          }
          function Mu() {
            var t = {}
            ;(t.Browser = Uu),
              (t.Node = Vu),
              (t.ReactNative = Fu),
              (t.Worker = qu),
              (this.a = t[di()])
          }
          ;(hu.prototype.c = function (n) {
            var i = n.data.eventType,
              r = n.data.eventId,
              t = this.a[i]
            if (t && 0 < t.length) {
              n.ports[0].postMessage({
                status: "ack",
                eventId: r,
                eventType: i,
                response: null,
              })
              var e = []
              U(t, function (t) {
                e.push(
                  Te().then(function () {
                    return t(n.origin, n.data.data)
                  })
                )
              }),
                ke(e).then(function (t) {
                  var e = []
                  U(t, function (t) {
                    e.push({
                      fulfilled: t.Mb,
                      value: t.value,
                      reason: t.reason ? t.reason.message : void 0,
                    })
                  }),
                    U(e, function (t) {
                      for (var e in t) void 0 === t[e] && delete t[e]
                    }),
                    n.ports[0].postMessage({
                      status: "done",
                      eventId: r,
                      eventType: i,
                      response: e,
                    })
                })
            }
          }),
            (pu.prototype.postMessage = function (t, e) {
              this.a.postMessage(t, e)
            }),
            (vu.prototype.close = function () {
              for (; 0 < this.a.length; ) gu(this, this.a[0])
              this.b = !0
            }),
            ((t = bu.prototype).set = function (n, i) {
              var r,
                o = !1,
                a = this
              return wu(this)
                .then(function (t) {
                  return Au((t = Tu(Eu((r = t), !0))).get(n))
                })
                .then(function (t) {
                  var e = Tu(Eu(r, !0))
                  return t
                    ? ((t.value = i), Au(e.put(t)))
                    : (a.b++,
                      (o = !0),
                      ((t = {}).fbase_key = n),
                      (t.value = i),
                      Au(e.add(t)))
                })
                .then(function () {
                  return (a.c[n] = i), ku(a, n)
                })
                .ma(function () {
                  o && a.b--
                })
            }),
            (t.get = function (e) {
              return wu(this)
                .then(function (t) {
                  return Au(Tu(Eu(t, !1)).get(e))
                })
                .then(function (t) {
                  return t && t.value
                })
            }),
            (t.T = function (e) {
              var n = !1,
                i = this
              return wu(this)
                .then(function (t) {
                  return (n = !0), i.b++, Au(Tu(Eu(t, !0)).delete(e))
                })
                .then(function () {
                  return delete i.c[e], ku(i, e)
                })
                .ma(function () {
                  n && i.b--
                })
            }),
            (t.ba = function (t) {
              var n
              0 == this.a.length &&
                (Nu((n = this)),
                (function e() {
                  n.f = setTimeout(function () {
                    n.i = Su(n)
                      .then(function (e) {
                        0 < e.length &&
                          U(n.a, function (t) {
                            t(e)
                          })
                      })
                      .then(function () {
                        e()
                      })
                      .o(function (t) {
                        "STOP_EVENT" != t.message && e()
                      })
                  }, 800)
                })()),
                this.a.push(t)
            }),
            (t.ha = function (e) {
              G(this.a, function (t) {
                return t == e
              }),
                0 == this.a.length && Nu(this)
            }),
            ((t = _u.prototype).get = function (e) {
              return this.b.then(function (t) {
                return t.get(e)
              })
            }),
            (t.set = function (e, n) {
              return this.b.then(function (t) {
                return t.set(e, n)
              })
            }),
            (t.T = function (e) {
              return this.b.then(function (t) {
                return t.T(e)
              })
            }),
            (t.ba = function (t) {
              this.a.push(t)
            }),
            (t.ha = function (e) {
              G(this.a, function (t) {
                return t == e
              })
            }),
            ((t = Ou.prototype).get = function (t) {
              return Te(this.a[t])
            }),
            (t.set = function (t, e) {
              return (this.a[t] = e), Te()
            }),
            (t.T = function (t) {
              return delete this.a[t], Te()
            }),
            (t.ba = function () {}),
            (t.ha = function () {}),
            ((t = Ru.prototype).get = function (t) {
              var e = this
              return Te().then(function () {
                return Oi(e.a.getItem(t))
              })
            }),
            (t.set = function (e, n) {
              var i = this
              return Te().then(function () {
                var t = Ni(n)
                null === t ? i.T(e) : i.a.setItem(e, t)
              })
            }),
            (t.T = function (t) {
              var e = this
              return Te().then(function () {
                e.a.removeItem(t)
              })
            }),
            (t.ba = function (t) {
              l.window && en(l.window, "storage", t)
            }),
            (t.ha = function (t) {
              l.window && on(l.window, "storage", t)
            }),
            ((t = Du.prototype).get = function () {
              return Te(null)
            }),
            (t.set = function () {
              return Te()
            }),
            (t.T = function () {
              return Te()
            }),
            (t.ba = function () {}),
            (t.ha = function () {}),
            ((t = Pu.prototype).get = function (t) {
              var e = this
              return Te().then(function () {
                return Oi(e.a.getItem(t))
              })
            }),
            (t.set = function (e, n) {
              var i = this
              return Te().then(function () {
                var t = Ni(n)
                null === t ? i.T(e) : i.a.setItem(e, t)
              })
            }),
            (t.T = function (t) {
              var e = this
              return Te().then(function () {
                e.a.removeItem(t)
              })
            }),
            (t.ba = function () {}),
            (t.ha = function () {})
          var xu,
            ju,
            Uu = { F: Ru, $a: Pu },
            Vu = { F: Ru, $a: Pu },
            Fu = { F: cu, $a: Du },
            qu = { F: Ru, $a: Du },
            Hu = { od: "local", NONE: "none", qd: "session" }
          function Ku() {
            var t = !(Ci(wi()) || !li()),
              e = Si(),
              n = Ti()
            ;(this.m = t),
              (this.h = e),
              (this.l = n),
              (this.a = {}),
              (t = xu = xu || new Mu())
            try {
              this.g =
                (!ei() && xi()) || !l.indexedDB
                  ? new t.a.F()
                  : new _u(fi() ? new Ou() : new t.a.F())
            } catch (t) {
              ;(this.g = new Ou()), (this.h = !0)
            }
            try {
              this.i = new t.a.$a()
            } catch (t) {
              this.i = new Ou()
            }
            ;(this.u = new Ou()), (this.f = b(this.Vb, this)), (this.b = {})
          }
          function Gu() {
            return (ju = ju || new Ku())
          }
          function Bu(t, e) {
            switch (e) {
              case "session":
                return t.i
              case "none":
                return t.u
              default:
                return t.g
            }
          }
          function Wu(t, e) {
            return "firebase:" + t.name + (e ? ":" + e : "")
          }
          function Xu(t, e, n) {
            return (
              (n = Wu(e, n)), "local" == e.F && (t.b[n] = null), Bu(t, e.F).T(n)
            )
          }
          function Ju(t) {
            t.c && (clearInterval(t.c), (t.c = null))
          }
          function Yu(t) {
            ;(this.a = t), (this.b = Gu())
          }
          ;((t = Ku.prototype).get = function (t, e) {
            return Bu(this, t.F).get(Wu(t, e))
          }),
            (t.set = function (e, t, n) {
              var i = Wu(e, n),
                r = this,
                o = Bu(this, e.F)
              return o
                .set(i, t)
                .then(function () {
                  return o.get(i)
                })
                .then(function (t) {
                  "local" == e.F && (r.b[i] = t)
                })
            }),
            (t.addListener = function (t, e, n) {
              var i
              ;(t = Wu(t, e)),
                this.l && (this.b[t] = l.localStorage.getItem(t)),
                ut(this.a) &&
                  (Bu(this, "local").ba(this.f),
                  this.h ||
                    ((ei() || !xi()) && l.indexedDB) ||
                    !this.l ||
                    (Ju((i = this)),
                    (i.c = setInterval(function () {
                      for (var t in i.a) {
                        var e = l.localStorage.getItem(t),
                          n = i.b[t]
                        e != n &&
                          ((i.b[t] = e),
                          (e = new Ge({
                            type: "storage",
                            key: t,
                            target: window,
                            oldValue: n,
                            newValue: e,
                            a: !0,
                          })),
                          i.Vb(e))
                      }
                    }, 1e3)))),
                this.a[t] || (this.a[t] = []),
                this.a[t].push(n)
            }),
            (t.removeListener = function (t, e, n) {
              ;(t = Wu(t, e)),
                this.a[t] &&
                  (G(this.a[t], function (t) {
                    return t == n
                  }),
                  0 == this.a[t].length && delete this.a[t]),
                ut(this.a) && (Bu(this, "local").ha(this.f), Ju(this))
            }),
            (t.Vb = function (t) {
              if (t && t.f) {
                var e = t.a.key
                if (null == e)
                  for (var n in this.a) {
                    var i = this.b[n]
                    void 0 === i && (i = null)
                    var r = l.localStorage.getItem(n)
                    r !== i && ((this.b[n] = r), this.ib(n))
                  }
                else if (0 == e.indexOf("firebase:") && this.a[e]) {
                  if (
                    (void 0 !== t.a.a ? Bu(this, "local").ha(this.f) : Ju(this),
                    this.m)
                  )
                    if (
                      ((n = l.localStorage.getItem(e)),
                      (i = t.a.newValue) !== n)
                    )
                      null !== i
                        ? l.localStorage.setItem(e, i)
                        : l.localStorage.removeItem(e)
                    else if (this.b[e] === i && void 0 === t.a.a) return
                  var o = this
                  ;(n = function () {
                    ;(void 0 === t.a.a &&
                      o.b[e] === l.localStorage.getItem(e)) ||
                      ((o.b[e] = l.localStorage.getItem(e)), o.ib(e))
                  }),
                    Ht &&
                    $t &&
                    10 == $t &&
                    l.localStorage.getItem(e) !== t.a.newValue &&
                    t.a.newValue !== t.a.oldValue
                      ? setTimeout(n, 10)
                      : n()
                }
              } else U(t, b(this.ib, this))
            }),
            (t.ib = function (t) {
              this.a[t] &&
                U(this.a[t], function (t) {
                  t()
                })
            })
          var zu,
            $u = { name: "authEvent", F: "local" }
          function Zu() {
            this.a = Gu()
          }
          function Qu(t, e) {
            ;(this.b = tc),
              (this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
              (this.g = this.c = 0),
              (this.a = []),
              (this.i = t),
              (this.h = e),
              (this.l = l.Int32Array ? new Int32Array(64) : Array(64)),
              void 0 === zu && (zu = l.Int32Array ? new Int32Array(sc) : sc),
              this.reset()
          }
          e(Qu, function () {
            this.b = -1
          })
          for (var tc = 64, ec = tc - 1, nc = [], ic = 0; ic < ec; ic++)
            nc[ic] = 0
          var rc = B(128, nc)
          function oc(t) {
            for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length; )
              (n[i++] =
                (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]),
                (r = 4 * i)
            for (e = 16; e < 64; e++) {
              ;(r = 0 | n[e - 15]), (i = 0 | n[e - 2])
              var o =
                  ((0 | n[e - 16]) +
                    (((r >>> 7) | (r << 25)) ^
                      ((r >>> 18) | (r << 14)) ^
                      (r >>> 3))) |
                  0,
                a =
                  ((0 | n[e - 7]) +
                    (((i >>> 17) | (i << 15)) ^
                      ((i >>> 19) | (i << 13)) ^
                      (i >>> 10))) |
                  0
              n[e] = (o + a) | 0
            }
            ;(i = 0 | t.a[0]), (r = 0 | t.a[1])
            var s = 0 | t.a[2],
              u = 0 | t.a[3],
              c = 0 | t.a[4],
              h = 0 | t.a[5],
              l = 0 | t.a[6]
            for (o = 0 | t.a[7], e = 0; e < 64; e++) {
              var f =
                ((((i >>> 2) | (i << 30)) ^
                  ((i >>> 13) | (i << 19)) ^
                  ((i >>> 22) | (i << 10))) +
                  ((i & r) ^ (i & s) ^ (r & s))) |
                0
              ;(a =
                ((o =
                  (o +
                    (((c >>> 6) | (c << 26)) ^
                      ((c >>> 11) | (c << 21)) ^
                      ((c >>> 25) | (c << 7)))) |
                  0) +
                  (((a = ((a = (c & h) ^ (~c & l)) + (0 | zu[e])) | 0) +
                    (0 | n[e])) |
                    0)) |
                0),
                (o = l),
                (l = h),
                (h = c),
                (c = (u + a) | 0),
                (u = s),
                (s = r),
                (r = i),
                (i = (a + f) | 0)
            }
            ;(t.a[0] = (t.a[0] + i) | 0),
              (t.a[1] = (t.a[1] + r) | 0),
              (t.a[2] = (t.a[2] + s) | 0),
              (t.a[3] = (t.a[3] + u) | 0),
              (t.a[4] = (t.a[4] + c) | 0),
              (t.a[5] = (t.a[5] + h) | 0),
              (t.a[6] = (t.a[6] + l) | 0),
              (t.a[7] = (t.a[7] + o) | 0)
          }
          function ac(t, e, n) {
            void 0 === n && (n = e.length)
            var i = 0,
              r = t.c
            if ("string" == typeof e)
              for (; i < n; )
                (t.f[r++] = e.charCodeAt(i++)), r == t.b && (oc(t), (r = 0))
            else {
              if (!h(e)) throw Error("message must be string or array")
              for (; i < n; ) {
                var o = e[i++]
                if (
                  !("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))
                )
                  throw Error("message must be a byte array")
                ;(t.f[r++] = o), r == t.b && (oc(t), (r = 0))
              }
            }
            ;(t.c = r), (t.g += n)
          }
          Qu.prototype.reset = function () {
            ;(this.g = this.c = 0),
              (this.a = l.Int32Array ? new Int32Array(this.h) : W(this.h))
          }
          var sc = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ]
          function uc() {
            Qu.call(this, 8, cc)
          }
          e(uc, Qu)
          var cc = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225,
          ]
          function hc(t, e, n, i, r) {
            ;(this.u = t),
              (this.i = e),
              (this.l = n),
              (this.m = i || null),
              (this.s = r || null),
              (this.h = e + ":" + n),
              (this.w = new Zu()),
              (this.g = new Yu(this.h)),
              (this.f = null),
              (this.b = []),
              (this.a = this.c = null)
          }
          function lc(t) {
            return new I("invalid-cordova-configuration", t)
          }
          function fc(t) {
            var e = new uc()
            ac(e, t), (t = [])
            var n = 8 * e.g
            e.c < 56 ? ac(e, rc, 56 - e.c) : ac(e, rc, e.b - (e.c - 56))
            for (var i = 63; 56 <= i; i--) (e.f[i] = 255 & n), (n /= 256)
            for (oc(e), i = n = 0; i < e.i; i++)
              for (var r = 24; 0 <= r; r -= 8) t[n++] = (e.a[i] >> r) & 255
            return F(t, function (t) {
              return 1 < (t = t.toString(16)).length ? t : "0" + t
            }).join("")
          }
          function dc(t, e) {
            for (var n = 0; n < t.b.length; n++)
              try {
                t.b[n](e)
              } catch (t) {}
          }
          function pc(s) {
            return (
              s.f ||
                (s.f = s.ka().then(function () {
                  return new ve(function (n) {
                    function e(i) {
                      ;(t = !0),
                        a && a.cancel(),
                        vc(r).then(function (t) {
                          var e = o
                          if (t && i && i.url) {
                            var n = null
                            ;-1 !=
                              (e = zr(i.url)).indexOf("/__/auth/callback") &&
                              (n = (n =
                                "object" ==
                                typeof (n = Oi(
                                  Cn((n = Dn(e)), "firebaseError") || null
                                ))
                                  ? T(n)
                                  : null)
                                ? new Do(t.c, t.b, null, null, n, null, t.S())
                                : new Do(t.c, t.b, e, t.f, null, null, t.S())),
                              (e = n || o)
                          }
                          dc(r, e)
                        })
                    }
                    var r, o, t, a, i
                    s.Ca(function t(e) {
                      return n(e), s.Qa(t), !1
                    }),
                      (r = s),
                      (o = new Do(
                        "unknown",
                        null,
                        null,
                        null,
                        new I("no-auth-event")
                      )),
                      (t = !1),
                      (a = yn(500).then(function () {
                        return vc(r).then(function () {
                          t || dc(r, o)
                        })
                      })),
                      (i = l.handleOpenURL),
                      (l.handleOpenURL = function (t) {
                        if (
                          (0 ==
                            t
                              .toLowerCase()
                              .indexOf(
                                Ii("BuildInfo.packageName", l).toLowerCase() +
                                  "://"
                              ) && e({ url: t }),
                          "function" == typeof i)
                        )
                          try {
                            i(t)
                          } catch (t) {
                            console.error(t)
                          }
                      }),
                      (xo = xo || new Lo()),
                      (function (t) {
                        var n = xo
                        n.a.push(t),
                          n.b ||
                            ((n.b = function (t) {
                              for (var e = 0; e < n.a.length; e++) n.a[e](t)
                            }),
                            "function" ==
                              typeof (t = Ii("universalLinks.subscribe", l)) &&
                              t(null, n.b))
                      })(e)
                  })
                })),
              s.f
            )
          }
          function vc(e) {
            var t,
              n = null
            return (t = e.g).b
              .get($u, t.a)
              .then(function (t) {
                return Po(t)
              })
              .then(function (t) {
                return (n = t), Xu((t = e.g).b, $u, t.a)
              })
              .then(function () {
                return n
              })
          }
          function mc(t) {
            ;(this.a = t), (this.b = Gu())
          }
          ;((t = hc.prototype).ka = function () {
            return this.Ga
              ? this.Ga
              : (this.Ga = (hi(void 0)
                  ? ci().then(function () {
                      return new ve(function (t, e) {
                        var n = l.document,
                          i = setTimeout(function () {
                            e(Error("Cordova framework is not ready."))
                          }, 1e3)
                        n.addEventListener(
                          "deviceready",
                          function () {
                            clearTimeout(i), t()
                          },
                          !1
                        )
                      })
                    })
                  : Ee(
                      Error(
                        "Cordova must run in an Android or iOS file scheme."
                      )
                    )
                ).then(
                  function () {
                    if ("function" != typeof Ii("universalLinks.subscribe", l))
                      throw lc(
                        "cordova-universal-links-plugin-fix is not installed"
                      )
                    if (void 0 === Ii("BuildInfo.packageName", l))
                      throw lc("cordova-plugin-buildinfo is not installed")
                    if (
                      "function" !=
                      typeof Ii("cordova.plugins.browsertab.openUrl", l)
                    )
                      throw lc("cordova-plugin-browsertab is not installed")
                    if ("function" != typeof Ii("cordova.InAppBrowser.open", l))
                      throw lc("cordova-plugin-inappbrowser is not installed")
                  },
                  function () {
                    throw new I("cordova-not-ready")
                  }
                ))
          }),
            (t.Lb = function (t, e) {
              return (
                e(new I("operation-not-supported-in-this-environment")), Te()
              )
            }),
            (t.Jb = function () {
              return Ee(new I("operation-not-supported-in-this-environment"))
            }),
            (t.Xb = function () {
              return !1
            }),
            (t.Ub = function () {
              return !0
            }),
            (t.Qb = function () {
              return !0
            }),
            (t.Kb = function (t, e, n, i) {
              if (this.c) return Ee(new I("redirect-operation-pending"))
              var r = this,
                o = l.document,
                a = null,
                s = null,
                u = null,
                c = null
              return (this.c = Te()
                .then(function () {
                  return Co(e), pc(r)
                })
                .then(function () {
                  return (function (n, t, e, i, r) {
                    var o = (function () {
                        for (var t = 20, e = []; 0 < t; )
                          e.push(
                            "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                              Math.floor(62 * Math.random())
                            )
                          ),
                            t--
                        return e.join("")
                      })(),
                      a = new Do(
                        t,
                        i,
                        null,
                        o,
                        new I("no-auth-event"),
                        null,
                        r
                      ),
                      s = Ii("BuildInfo.packageName", l)
                    if ("string" != typeof s)
                      throw new I("invalid-cordova-configuration")
                    var u = Ii("BuildInfo.displayName", l),
                      c = {}
                    if (
                      wi()
                        .toLowerCase()
                        .match(/iphone|ipad|ipod/)
                    )
                      c.ibi = s
                    else {
                      if (
                        !wi()
                          .toLowerCase()
                          .match(/android/)
                      )
                        return Ee(
                          new I("operation-not-supported-in-this-environment")
                        )
                      c.apn = s
                    }
                    u && (c.appDisplayName = u), (o = fc(o)), (c.sessionId = o)
                    var h = uu(n.u, n.i, n.l, t, e, null, i, n.m, c, n.s, r)
                    return n
                      .ka()
                      .then(function () {
                        var t = n.h
                        return n.w.a.set($u, a.v(), t)
                      })
                      .then(function () {
                        var t = Ii("cordova.plugins.browsertab.isAvailable", l)
                        if ("function" != typeof t)
                          throw new I("invalid-cordova-configuration")
                        var e = null
                        t(function (t) {
                          if (t) {
                            if (
                              "function" !=
                              typeof (e = Ii(
                                "cordova.plugins.browsertab.openUrl",
                                l
                              ))
                            )
                              throw new I("invalid-cordova-configuration")
                            e(h)
                          } else {
                            if (
                              "function" !=
                              typeof (e = Ii("cordova.InAppBrowser.open", l))
                            )
                              throw new I("invalid-cordova-configuration")
                            ;(t = wi()),
                              (n.a = e(
                                h,
                                t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) ||
                                  t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                  ? "_blank"
                                  : "_system",
                                "location=yes"
                              ))
                          }
                        })
                      })
                  })(r, t, e, n, i)
                })
                .then(function () {
                  return new ve(function (e, t) {
                    ;(s = function () {
                      var t = Ii("cordova.plugins.browsertab.close", l)
                      return (
                        e(),
                        "function" == typeof t && t(),
                        r.a &&
                          "function" == typeof r.a.close &&
                          (r.a.close(), (r.a = null)),
                        !1
                      )
                    }),
                      r.Ca(s),
                      (u = function () {
                        a =
                          a ||
                          yn(2e3).then(function () {
                            t(new I("redirect-cancelled-by-user"))
                          })
                      }),
                      (c = function () {
                        Li() && u()
                      }),
                      o.addEventListener("resume", u, !1),
                      wi()
                        .toLowerCase()
                        .match(/android/) ||
                        o.addEventListener("visibilitychange", c, !1)
                  }).o(function (t) {
                    return vc(r).then(function () {
                      throw t
                    })
                  })
                })
                .ma(function () {
                  u && o.removeEventListener("resume", u, !1),
                    c && o.removeEventListener("visibilitychange", c, !1),
                    a && a.cancel(),
                    s && r.Qa(s),
                    (r.c = null)
                }))
            }),
            (t.Ca = function (e) {
              this.b.push(e),
                pc(this).o(function (t) {
                  "auth/invalid-cordova-configuration" === t.code &&
                    ((t = new Do(
                      "unknown",
                      null,
                      null,
                      null,
                      new I("no-auth-event")
                    )),
                    e(t))
                })
            }),
            (t.Qa = function (e) {
              G(this.b, function (t) {
                return t == e
              })
            })
          var gc = { name: "pendingRedirect", F: "session" }
          function bc(t) {
            return Xu(t.b, gc, t.a)
          }
          function yc(t, e, n) {
            ;(this.i = {}),
              (this.w = 0),
              (this.D = t),
              (this.u = e),
              (this.m = n),
              (this.h = []),
              (this.f = !1),
              (this.l = b(this.s, this)),
              (this.b = new Pc()),
              (this.B = new Uc()),
              (this.g = new mc(this.u + ":" + this.m)),
              (this.c = {}),
              (this.c.unknown = this.b),
              (this.c.signInViaRedirect = this.b),
              (this.c.linkViaRedirect = this.b),
              (this.c.reauthViaRedirect = this.b),
              (this.c.signInViaPopup = this.B),
              (this.c.linkViaPopup = this.B),
              (this.c.reauthViaPopup = this.B),
              (this.a = wc(this.D, this.u, this.m, E))
          }
          function wc(t, e, n, i) {
            var r = Xl.SDK_VERSION || null
            return new (hi() ? hc : ru)(t, e, n, r, i)
          }
          function Ic(e) {
            e.f || ((e.f = !0), e.a.Ca(e.l))
            var n = e.a
            return e.a.ka().o(function (t) {
              throw (e.a == n && e.reset(), t)
            })
          }
          function Tc(n) {
            n.a.Ub() &&
              Ic(n).o(function (t) {
                var e = new Do(
                  "unknown",
                  null,
                  null,
                  null,
                  new I("operation-not-supported-in-this-environment")
                )
                _c(t) && n.s(e)
              }),
              n.a.Qb() || Lc(n.b)
          }
          function Ec(n, t) {
            var e
            H(n.h, t) || n.h.push(t),
              n.f ||
                (e = n.g).b
                  .get(gc, e.a)
                  .then(function (t) {
                    return "pending" == t
                  })
                  .then(function (t) {
                    t
                      ? bc(n.g).then(function () {
                          Ic(n).o(function (t) {
                            var e = new Do(
                              "unknown",
                              null,
                              null,
                              null,
                              new I(
                                "operation-not-supported-in-this-environment"
                              )
                            )
                            _c(t) && n.s(e)
                          })
                        })
                      : Tc(n)
                  })
                  .o(function () {
                    Tc(n)
                  })
          }
          function Ac(t, e) {
            G(t.h, function (t) {
              return t == e
            })
          }
          ;(yc.prototype.reset = function () {
            ;(this.f = !1),
              this.a.Qa(this.l),
              (this.a = wc(this.D, this.u, this.m)),
              (this.i = {})
          }),
            (yc.prototype.s = function (t) {
              if (!t) throw new I("invalid-auth-event")
              if (
                (6e5 <= w() - this.w && ((this.i = {}), (this.w = 0)),
                t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
              )
                return !1
              for (var e = !1, n = 0; n < this.h.length; n++) {
                var i = this.h[n]
                if (i.Cb(t.c, t.b)) {
                  ;(e = this.c[t.c]) &&
                    (e.h(t, i),
                    t &&
                      (t.f || t.b) &&
                      ((this.i[t.getUid()] = !0), (this.w = w()))),
                    (e = !0)
                  break
                }
              }
              return Lc(this.b), e
            })
          var kc = new Pi(2e3, 1e4),
            Sc = new Pi(3e4, 6e4)
          function Nc(t, e, n, i, r, o, a) {
            return t.a.Jb(
              e,
              n,
              i,
              function () {
                t.f || ((t.f = !0), t.a.Ca(t.l))
              },
              function () {
                t.reset()
              },
              r,
              o,
              a
            )
          }
          function _c(t) {
            return !(!t || "auth/cordova-not-ready" != t.code)
          }
          function Oc(e, t, n, i, r) {
            var o, a
            return (a = e.g).b.set(gc, "pending", a.a).then(function () {
              return e.a
                .Kb(t, n, i, r)
                .o(function (t) {
                  if (_c(t))
                    throw new I("operation-not-supported-in-this-environment")
                  return (
                    (o = t),
                    bc(e.g).then(function () {
                      throw o
                    })
                  )
                })
                .then(function () {
                  return e.a.Xb()
                    ? new ve(function () {})
                    : bc(e.g)
                        .then(function () {
                          return e.pa()
                        })
                        .then(function () {})
                        .o(function () {})
                })
            })
          }
          function Rc(t, e, n, i, r) {
            return t.a.Lb(
              i,
              function (t) {
                e.la(n, null, t, r)
              },
              kc.get()
            )
          }
          yc.prototype.pa = function () {
            return this.b.pa()
          }
          var Cc = {}
          function Dc(t, e, n) {
            var i = e + ":" + n
            return Cc[i] || (Cc[i] = new yc(t, e, n)), Cc[i]
          }
          function Pc() {
            ;(this.b = null),
              (this.f = []),
              (this.c = []),
              (this.a = null),
              (this.i = this.g = !1)
          }
          function Lc(t) {
            t.g || ((t.g = !0), jc(t, !1, null, null))
          }
          function Mc(t) {
            t.g && !t.i && jc(t, !1, null, null)
          }
          function xc(t, e) {
            if (
              ((t.b = function () {
                return Te(e)
              }),
              t.f.length)
            )
              for (var n = 0; n < t.f.length; n++) t.f[n](e)
          }
          function jc(t, e, n, i) {
            e
              ? i
                ? (function (t, e) {
                    if (
                      ((t.b = function () {
                        return Ee(e)
                      }),
                      t.c.length)
                    )
                      for (var n = 0; n < t.c.length; n++) t.c[n](e)
                  })(t, i)
                : xc(t, n)
              : xc(t, { user: null }),
              (t.f = []),
              (t.c = [])
          }
          function Uc() {}
          function Vc() {
            ;(this.Bb = !1),
              Object.defineProperty(this, "appVerificationDisabled", {
                get: function () {
                  return this.Bb
                },
                set: function (t) {
                  this.Bb = t
                },
                enumerable: !1,
              })
          }
          function Fc(t, e) {
            ;(this.a = e), qi(this, "verificationId", t)
          }
          function qc(t, e, n, i) {
            return new _o(t).cb(e, n).then(function (t) {
              return new Fc(t, i)
            })
          }
          function Hc(t) {
            var e = xr(t)
            if (!(e && e.exp && e.auth_time && e.iat))
              throw new I(
                "internal-error",
                "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation."
              )
            Hi(this, {
              token: t,
              expirationTime: Mi(1e3 * e.exp),
              authTime: Mi(1e3 * e.auth_time),
              issuedAtTime: Mi(1e3 * e.iat),
              signInProvider:
                e.firebase && e.firebase.sign_in_provider
                  ? e.firebase.sign_in_provider
                  : null,
              signInSecondFactor:
                e.firebase && e.firebase.sign_in_second_factor
                  ? e.firebase.sign_in_second_factor
                  : null,
              claims: e,
            })
          }
          function Kc(t, e, n) {
            var i = e && e[Bc]
            if (!i)
              throw new I(
                "argument-error",
                "Internal assert: Invalid MultiFactorResolver"
              )
            ;(this.a = t),
              (this.f = ct(e)),
              (this.g = n),
              (this.c = new $r(null, i)),
              (this.b = [])
            var r = this
            U(e[Gc] || [], function (t) {
              ;(t = Wi(t)) && r.b.push(t)
            }),
              qi(this, "auth", this.a),
              qi(this, "session", this.c),
              qi(this, "hints", this.b)
          }
          ;(Pc.prototype.reset = function () {
            ;(this.b = null), this.a && (this.a.cancel(), (this.a = null))
          }),
            (Pc.prototype.h = function (t, e) {
              if (t) {
                this.reset(), (this.g = !0)
                var n = t.c,
                  i = t.b,
                  r = t.a && "auth/web-storage-unsupported" == t.a.code,
                  o =
                    t.a &&
                    "auth/operation-not-supported-in-this-environment" ==
                      t.a.code
                ;(this.i = !(!r && !o)),
                  "unknown" != n || r || o
                    ? t.a
                      ? (jc(this, !0, null, t.a), Te())
                      : e.Da(n, i)
                      ? (function (e, t, n) {
                          n = n.Da(t.c, t.b)
                          var i = t.g,
                            r = t.f,
                            o = t.i,
                            a = t.S(),
                            s = !!t.c.match(/Redirect$/)
                          n(i, r, a, o)
                            .then(function (t) {
                              jc(e, s, t, null)
                            })
                            .o(function (t) {
                              jc(e, s, null, t)
                            })
                        })(this, t, e)
                      : Ee(new I("invalid-auth-event"))
                    : (jc(this, !1, null, null), Te())
              } else Ee(new I("invalid-auth-event"))
            }),
            (Pc.prototype.pa = function () {
              var r = this
              return new ve(function (t, e) {
                var n, i
                r.b
                  ? r.b().then(t, e)
                  : (r.f.push(t),
                    r.c.push(e),
                    (n = r),
                    (i = new I("timeout")),
                    n.a && n.a.cancel(),
                    (n.a = yn(Sc.get()).then(function () {
                      n.b || ((n.g = !0), jc(n, !0, null, i))
                    })))
              })
            }),
            (Uc.prototype.h = function (t, e) {
              if (t) {
                var n = t.c,
                  i = t.b
                t.a
                  ? (e.la(t.c, null, t.a, t.b), Te())
                  : e.Da(n, i)
                  ? ((o = e),
                    (a = (r = t).b),
                    (s = r.c),
                    o
                      .Da(s, a)(r.g, r.f, r.S(), r.i)
                      .then(function (t) {
                        o.la(s, t, null, a)
                      })
                      .o(function (t) {
                        o.la(s, null, t, a)
                      }))
                  : Ee(new I("invalid-auth-event"))
              } else Ee(new I("invalid-auth-event"))
              var r, o, a, s
            }),
            (Fc.prototype.confirm = function (t) {
              return (t = Oo(this.verificationId, t)), this.a(t)
            })
          var Gc = "mfaInfo",
            Bc = "mfaPendingCredential"
          function Wc(t, e, n, i) {
            I.call(this, "multi-factor-auth-required", i, e),
              (this.b = new Kc(t, e, n)),
              qi(this, "resolver", this.b)
          }
          function Xc(t, e, n) {
            if (
              t &&
              v(t.serverResponse) &&
              "auth/multi-factor-auth-required" === t.code
            )
              try {
                return new Wc(e, t.serverResponse, n, t.message)
              } catch (t) {}
            return null
          }
          function Jc() {}
          function Yc(t) {
            qi(this, "factorId", t.ea), (this.a = t)
          }
          function zc(t) {
            if ((Yc.call(this, t), this.a.ea != _o.PROVIDER_ID))
              throw new I(
                "argument-error",
                "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential"
              )
          }
          function $c(t, e) {
            for (var n in (Ke.call(this, t), e)) this[n] = e[n]
          }
          function Zc(t, e) {
            ;(this.a = t),
              (this.b = []),
              (this.c = b(this.wc, this)),
              en(this.a, "userReloaded", this.c)
            var i = []
            e &&
              e.multiFactor &&
              e.multiFactor.enrolledFactors &&
              U(e.multiFactor.enrolledFactors, function (t) {
                var e = null,
                  n = {}
                if (t) {
                  t.uid && (n[Yi] = t.uid),
                    t.displayName && (n[Xi] = t.displayName),
                    t.enrollmentTime &&
                      (n[Ji] = new Date(t.enrollmentTime).toISOString()),
                    t.phoneNumber && (n[zi] = t.phoneNumber)
                  try {
                    e = new $i(n)
                  } catch (t) {}
                  t = e
                } else t = null
                t && i.push(t)
              }),
              Qc(this, i)
          }
          function Qc(t, e) {
            ;(t.b = e), qi(t, "enrolledFactors", e)
          }
          function th(t, e, n) {
            if (
              ((this.h = t),
              (this.i = e),
              (this.g = n),
              (this.c = 3e4),
              (this.f = 96e4),
              (this.b = null),
              (this.a = this.c),
              this.f < this.c)
            )
              throw Error(
                "Proactive refresh lower bound greater than upper bound!"
              )
          }
          function eh(t, e) {
            return e
              ? ((t.a = t.c), t.g())
              : ((e = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), e)
          }
          function nh(t) {
            ;(this.c = t), (this.b = this.a = null)
          }
          function ih(t) {
            return (t.b && 1e3 * t.b.c) || 0
          }
          function rh(t, e) {
            var n = e.refreshToken
            ;(t.b = Mr(e[Ga] || "")), (t.a = n)
          }
          function oh(e, t) {
            return (
              (i = e.c),
              (r = t),
              new ve(function (e, n) {
                ;("refresh_token" == r.grant_type && r.refresh_token) ||
                ("authorization_code" == r.grant_type && r.code)
                  ? $a(
                      i,
                      i.u + "?key=" + encodeURIComponent(i.c),
                      function (t) {
                        t
                          ? t.error
                            ? n(Ys(t))
                            : t.access_token && t.refresh_token
                            ? e(t)
                            : n(new I("internal-error"))
                          : n(new I("network-request-failed"))
                      },
                      "POST",
                      Gn(r).toString(),
                      i.g,
                      i.m.get()
                    )
                  : n(new I("internal-error"))
              })
                .then(function (t) {
                  return (
                    (e.b = Mr(t.access_token)),
                    (e.a = t.refresh_token),
                    { accessToken: e.b.toString(), refreshToken: e.a }
                  )
                })
                .o(function (t) {
                  throw ("auth/user-token-expired" == t.code && (e.a = null), t)
                })
            )
            var i, r
          }
          function ah(t, e) {
            ;(this.a = t || null),
              (this.b = e || null),
              Hi(this, {
                lastSignInTime: Mi(e || null),
                creationTime: Mi(t || null),
              })
          }
          function sh(t, e, n, i, r, o) {
            Hi(this, {
              uid: t,
              displayName: i || null,
              photoURL: r || null,
              email: n || null,
              phoneNumber: o || null,
              providerId: e,
            })
          }
          function uh(t, e, n) {
            var i
            ;(this.N = []),
              (this.l = t.apiKey),
              (this.m = t.appName),
              (this.s = t.authDomain || null),
              (t = Xl.SDK_VERSION ? yi(Xl.SDK_VERSION) : null),
              (this.a = new Ha(this.l, N(E), t)),
              (this.b = new nh(this.a)),
              vh(this, e[Ga]),
              rh(this.b, e),
              qi(this, "refreshToken", this.b.a),
              bh(this, n || {}),
              pn.call(this),
              (this.P = !1),
              this.s && Ei() && (this.i = Dc(this.s, this.l, this.m)),
              (this.R = []),
              (this.h = null),
              (this.B =
                ((i = this),
                new th(
                  function () {
                    return i.I(!0)
                  },
                  function (t) {
                    return !(!t || "auth/network-request-failed" != t.code)
                  },
                  function () {
                    var t = ih(i.b) - w() - 3e5
                    return 0 < t ? t : 0
                  }
                ))),
              (this.Z = b(this.Ma, this))
            var r = this
            ;(this.oa = null),
              (this.za = function (t) {
                r.va(t.g)
              }),
              (this.aa = null),
              (this.W = []),
              (this.ya = function (t) {
                hh(r, t.c)
              }),
              (this.$ = null),
              (this.O = new Zc(this, n)),
              qi(this, "multiFactor", this.O)
          }
          function ch(t, e) {
            t.aa && on(t.aa, "languageCodeChanged", t.za),
              (t.aa = e) && en(e, "languageCodeChanged", t.za)
          }
          function hh(t, e) {
            ;(t.W = e), za(t.a, Xl.SDK_VERSION ? yi(Xl.SDK_VERSION, t.W) : null)
          }
          function lh(t, e) {
            t.$ && on(t.$, "frameworkChanged", t.ya),
              (t.$ = e) && en(e, "frameworkChanged", t.ya)
          }
          function fh(e) {
            try {
              return Xl.app(e.m).auth()
            } catch (t) {
              throw new I(
                "internal-error",
                "No firebase.auth.Auth instance is available for the Firebase App '" +
                  e.m +
                  "'!"
              )
            }
          }
          function dh(t) {
            t.D ||
              t.B.b ||
              (t.B.start(),
              on(t, "tokenChanged", t.Z),
              en(t, "tokenChanged", t.Z))
          }
          function ph(t) {
            on(t, "tokenChanged", t.Z), t.B.stop()
          }
          function vh(t, e) {
            ;(t.xa = e), qi(t, "_lat", e)
          }
          function mh(t) {
            for (var e = [], n = 0; n < t.R.length; n++) e.push(t.R[n](t))
            return ke(e).then(function () {
              return t
            })
          }
          function gh(t) {
            t.i && !t.P && ((t.P = !0), Ec(t.i, t))
          }
          function bh(t, e) {
            Hi(t, {
              uid: e.uid,
              displayName: e.displayName || null,
              photoURL: e.photoURL || null,
              email: e.email || null,
              emailVerified: e.emailVerified || !1,
              phoneNumber: e.phoneNumber || null,
              isAnonymous: e.isAnonymous || !1,
              tenantId: e.tenantId || null,
              metadata: new ah(e.createdAt, e.lastLoginAt),
              providerData: [],
            }),
              (t.a.b = t.tenantId)
          }
          function yh() {}
          function wh(t) {
            return Te().then(function () {
              if (t.D) throw new I("app-deleted")
            })
          }
          function Ih(t) {
            return F(t.providerData, function (t) {
              return t.providerId
            })
          }
          function Th(t, e) {
            e && (Eh(t, e.providerId), t.providerData.push(e))
          }
          function Eh(t, e) {
            G(t.providerData, function (t) {
              return t.providerId == e
            })
          }
          function Ah(t, e, n) {
            ;("uid" != e || n) && t.hasOwnProperty(e) && qi(t, e, n)
          }
          function kh(e, t) {
            var n, i, r
            e != t &&
              (Hi(e, {
                uid: t.uid,
                displayName: t.displayName,
                photoURL: t.photoURL,
                email: t.email,
                emailVerified: t.emailVerified,
                phoneNumber: t.phoneNumber,
                isAnonymous: t.isAnonymous,
                tenantId: t.tenantId,
                providerData: [],
              }),
              t.metadata
                ? qi(e, "metadata", new ah((r = t.metadata).a, r.b))
                : qi(e, "metadata", new ah()),
              U(t.providerData, function (t) {
                Th(e, t)
              }),
              (n = e.b),
              (i = t.b),
              (n.b = i.b),
              (n.a = i.a),
              qi(e, "refreshToken", e.b.a),
              Qc(e.O, t.O.b))
          }
          function Sh(r) {
            return r.I().then(function (t) {
              var e,
                n,
                i = r.isAnonymous
              return (
                (n = t),
                Xs((e = r).a, As, { idToken: n })
                  .then(b(e.Ic, e))
                  .then(function () {
                    return i || Ah(r, "isAnonymous", !1), t
                  })
              )
            })
          }
          function Nh(t, e) {
            e[Ga] &&
              t.xa != e[Ga] &&
              (rh(t.b, e),
              t.dispatchEvent(new $c("tokenChanged")),
              vh(t, e[Ga]),
              Ah(t, "refreshToken", t.b.a))
          }
          function _h(t, e) {
            return Sh(t).then(function () {
              if (H(Ih(t), e))
                return mh(t).then(function () {
                  throw new I("provider-already-linked")
                })
            })
          }
          function Oh(t, e, n) {
            return Ki({
              user: t,
              credential: Ro(e),
              additionalUserInfo: (e = qr(e)),
              operationType: n,
            })
          }
          function Rh(t, e) {
            return (
              Nh(t, e),
              t.reload().then(function () {
                return t
              })
            )
          }
          function Ch(n, i, t, e, r) {
            if (!Ei())
              return Ee(new I("operation-not-supported-in-this-environment"))
            if (n.h && !r) return Ee(n.h)
            var o = Fr(t.providerId),
              a = Ri(n.uid + ":::"),
              s = null
            ;(!Si() || li()) &&
              n.s &&
              t.isOAuthProvider &&
              (s = uu(
                n.s,
                n.l,
                n.m,
                i,
                t,
                null,
                a,
                Xl.SDK_VERSION || null,
                null,
                null,
                n.tenantId
              ))
            var u = ai(s, o && o.ta, o && o.sa)
            return (
              (e = e()
                .then(function () {
                  if ((Ph(n), !r)) return n.I().then(function () {})
                })
                .then(function () {
                  return Nc(n.i, u, i, t, a, !!s, n.tenantId)
                })
                .then(function () {
                  return new ve(function (t, e) {
                    n.la(
                      i,
                      null,
                      new I("cancelled-popup-request"),
                      n.g || null
                    ),
                      (n.f = t),
                      (n.w = e),
                      (n.g = a),
                      (n.c = Rc(n.i, n, i, u, a))
                  })
                })
                .then(function (t) {
                  return u && oi(u), t ? Ki(t) : null
                })
                .o(function (t) {
                  throw (u && oi(u), t)
                })),
              Lh(n, e, r)
            )
          }
          function Dh(e, t, n, i, r) {
            if (!Ei())
              return Ee(new I("operation-not-supported-in-this-environment"))
            if (e.h && !r) return Ee(e.h)
            var o = null,
              a = Ri(e.uid + ":::")
            return (
              (i = i()
                .then(function () {
                  if ((Ph(e), !r)) return e.I().then(function () {})
                })
                .then(function () {
                  return (e.fa = a), mh(e)
                })
                .then(function (t) {
                  return e.ga && (t = (t = e.ga).b.set(jh, e.v(), t.a)), t
                })
                .then(function () {
                  return Oc(e.i, t, n, a, e.tenantId)
                })
                .o(function (t) {
                  if (((o = t), e.ga)) return Uh(e.ga)
                  throw o
                })
                .then(function () {
                  if (o) throw o
                })),
              Lh(e, i, r)
            )
          }
          function Ph(t) {
            if (!t.i || !t.P) {
              if (t.i && !t.P) throw new I("internal-error")
              throw new I("auth-domain-config-required")
            }
          }
          function Lh(n, t, e) {
            var i,
              r,
              o,
              a =
                ((r = t),
                (o = e),
                (i = n).h && !o
                  ? (r.cancel(), Ee(i.h))
                  : r.o(function (t) {
                      throw (
                        (!t ||
                          ("auth/user-disabled" != t.code &&
                            "auth/user-token-expired" != t.code) ||
                          (i.h || i.dispatchEvent(new $c("userInvalidated")),
                          (i.h = t)),
                        t)
                      )
                    }))
            return (
              n.N.push(a),
              a.ma(function () {
                K(n.N, a)
              }),
              a.o(function (t) {
                var e = null
                throw (
                  (t &&
                    "auth/multi-factor-auth-required" === t.code &&
                    (e = Xc(t.v(), fh(n), b(n.hc, n))),
                  e || t)
                )
              })
            )
          }
          function Mh(t) {
            if (!t.apiKey) return null
            var e = {
                apiKey: t.apiKey,
                authDomain: t.authDomain,
                appName: t.appName,
              },
              n = {}
            if (!t.stsTokenManager || !t.stsTokenManager.accessToken)
              return null
            ;(n[Ga] = t.stsTokenManager.accessToken),
              (n.refreshToken = t.stsTokenManager.refreshToken || null)
            var i = new uh(e, n, t)
            return (
              t.providerData &&
                U(t.providerData, function (t) {
                  t && Th(i, Ki(t))
                }),
              t.redirectEventId && (i.fa = t.redirectEventId),
              i
            )
          }
          function xh(t) {
            ;(this.a = t), (this.b = Gu())
          }
          ;(Kc.prototype.Pc = function (t) {
            var n = this
            return t.ob(this.a.b, this.c).then(function (t) {
              var e = ct(n.f)
              return delete e[Gc], delete e[Bc], lt(e, t), n.g(e)
            })
          }),
            e(Wc, I),
            (Jc.prototype.ob = function (t, e, n) {
              return e.type == Zr
                ? ((o = this),
                  (a = t),
                  (s = n),
                  e.Fa().then(function (t) {
                    return (
                      (t = { idToken: t }),
                      void 0 !== s && (t.displayName = s),
                      lt(t, { phoneVerificationInfo: No(o.a) }),
                      Xs(a, Ts, t)
                    )
                  }))
                : ((i = this),
                  (r = t),
                  e.Fa().then(function (t) {
                    return (
                      lt((t = { mfaPendingCredential: t }), {
                        phoneVerificationInfo: No(i.a),
                      }),
                      Xs(r, Es, t)
                    )
                  }))
              var i, r, o, a, s
            }),
            e(Yc, Jc),
            e(zc, Yc),
            e($c, Ke),
            ((t = Zc.prototype).wc = function (t) {
              var e, n
              Qc(
                this,
                ((e = t.ed),
                (n = []),
                U(e.mfaInfo || [], function (t) {
                  ;(t = Wi(t)) && n.push(t)
                }),
                n)
              )
            }),
            (t.Ob = function () {
              return this.a.I().then(function (t) {
                return new $r(t, null)
              })
            }),
            (t.dc = function (e, n) {
              var i = this,
                r = this.a.a
              return this.Ob()
                .then(function (t) {
                  return e.ob(r, t, n)
                })
                .then(function (t) {
                  return Nh(i.a, t), i.a.reload()
                })
            }),
            (t.$c = function (t) {
              var n = this,
                i = "string" == typeof t ? t : t.uid,
                e = this.a.a
              return this.a
                .I()
                .then(function (t) {
                  return Xs(e, Ws, { idToken: t, mfaEnrollmentId: i })
                })
                .then(function (t) {
                  var e = V(n.b, function (t) {
                    return t.uid != i
                  })
                  return (
                    Qc(n, e),
                    Nh(n.a, t),
                    n.a.reload().o(function (t) {
                      if ("auth/user-token-expired" != t.code) throw t
                    })
                  )
                })
            }),
            (t.v = function () {
              return {
                multiFactor: {
                  enrolledFactors: F(this.b, function (t) {
                    return t.v()
                  }),
                },
              }
            }),
            (th.prototype.start = function () {
              ;(this.a = this.c),
                (function e(n, t) {
                  n.stop()
                  n.b = yn(eh(n, t))
                    .then(function () {
                      return (
                        (e = l.document),
                        (n = null),
                        Li() || !e
                          ? Te()
                          : new ve(function (t) {
                              ;(n = function () {
                                Li() &&
                                  (e.removeEventListener(
                                    "visibilitychange",
                                    n,
                                    !1
                                  ),
                                  t())
                              }),
                                e.addEventListener("visibilitychange", n, !1)
                            }).o(function (t) {
                              throw (
                                (e.removeEventListener(
                                  "visibilitychange",
                                  n,
                                  !1
                                ),
                                t)
                              )
                            })
                      )
                      var e, n
                    })
                    .then(function () {
                      return n.h()
                    })
                    .then(function () {
                      e(n, !0)
                    })
                    .o(function (t) {
                      n.i(t) && e(n, !1)
                    })
                })(this, !0)
            }),
            (th.prototype.stop = function () {
              this.b && (this.b.cancel(), (this.b = null))
            }),
            (nh.prototype.v = function () {
              return {
                apiKey: this.c.c,
                refreshToken: this.a,
                accessToken: this.b && this.b.toString(),
                expirationTime: ih(this),
              }
            }),
            (nh.prototype.getToken = function (t) {
              return (
                (t = !!t),
                this.b && !this.a
                  ? Ee(new I("user-token-expired"))
                  : t || !this.b || w() > ih(this) - 3e4
                  ? this.a
                    ? oh(this, {
                        grant_type: "refresh_token",
                        refresh_token: this.a,
                      })
                    : Te(null)
                  : Te({ accessToken: this.b.toString(), refreshToken: this.a })
              )
            }),
            (ah.prototype.v = function () {
              return { lastLoginAt: this.b, createdAt: this.a }
            }),
            e(uh, pn),
            (uh.prototype.va = function (t) {
              ;(this.oa = t), Ya(this.a, t)
            }),
            (uh.prototype.ja = function () {
              return this.oa
            }),
            (uh.prototype.Ea = function () {
              return W(this.W)
            }),
            (uh.prototype.Ma = function () {
              this.B.b && (this.B.stop(), this.B.start())
            }),
            qi(uh.prototype, "providerId", "firebase"),
            ((t = uh.prototype).reload = function () {
              var t = this
              return Lh(
                this,
                wh(this).then(function () {
                  return Sh(t)
                    .then(function () {
                      return mh(t)
                    })
                    .then(yh)
                })
              )
            }),
            (t.mc = function (t) {
              return this.I(t).then(function (t) {
                return new Hc(t)
              })
            }),
            (t.I = function (t) {
              var e = this
              return Lh(
                this,
                wh(this)
                  .then(function () {
                    return e.b.getToken(t)
                  })
                  .then(function (t) {
                    if (!t) throw new I("internal-error")
                    return (
                      t.accessToken != e.xa &&
                        (vh(e, t.accessToken),
                        e.dispatchEvent(new $c("tokenChanged"))),
                      Ah(e, "refreshToken", t.refreshToken),
                      t.accessToken
                    )
                  })
              )
            }),
            (t.Ic = function (t) {
              if (!(t = t.users) || !t.length) throw new I("internal-error")
              bh(this, {
                uid: (t = t[0]).localId,
                displayName: t.displayName,
                photoURL: t.photoUrl,
                email: t.email,
                emailVerified: !!t.emailVerified,
                phoneNumber: t.phoneNumber,
                lastLoginAt: t.lastLoginAt,
                createdAt: t.createdAt,
                tenantId: t.tenantId,
              })
              for (
                var e =
                    (i = (i = t).providerUserInfo) && i.length
                      ? F(i, function (t) {
                          return new sh(
                            t.rawId,
                            t.providerId,
                            t.email,
                            t.displayName,
                            t.photoUrl,
                            t.phoneNumber
                          )
                        })
                      : [],
                  n = 0;
                n < e.length;
                n++
              )
                Th(this, e[n])
              var i
              Ah(
                this,
                "isAnonymous",
                !(
                  (this.email && t.passwordHash) ||
                  (this.providerData && this.providerData.length)
                )
              ),
                this.dispatchEvent(new $c("userReloaded", { ed: t }))
            }),
            (t.Jc = function (t) {
              return (
                Vi(
                  "firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."
                ),
                this.pb(t)
              )
            }),
            (t.pb = function (t) {
              var e = this,
                n = null
              return Lh(
                this,
                t
                  .c(this.a, this.uid)
                  .then(function (t) {
                    return (
                      Nh(e, t),
                      (n = Oh(e, t, "reauthenticate")),
                      (e.h = null),
                      e.reload()
                    )
                  })
                  .then(function () {
                    return n
                  }),
                !0
              )
            }),
            (t.Ac = function (t) {
              return (
                Vi(
                  "firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."
                ),
                this.mb(t)
              )
            }),
            (t.mb = function (e) {
              var n = this,
                i = null
              return Lh(
                this,
                _h(this, e.providerId)
                  .then(function () {
                    return n.I()
                  })
                  .then(function (t) {
                    return e.b(n.a, t)
                  })
                  .then(function (t) {
                    return (i = Oh(n, t, "link")), Rh(n, t)
                  })
                  .then(function () {
                    return i
                  })
              )
            }),
            (t.Bc = function (t, e) {
              var n = this
              return Lh(
                this,
                _h(this, "phone").then(function () {
                  return qc(fh(n), t, e, b(n.mb, n))
                })
              )
            }),
            (t.Kc = function (t, e) {
              var n = this
              return Lh(
                this,
                Te().then(function () {
                  return qc(fh(n), t, e, b(n.pb, n))
                }),
                !0
              )
            }),
            (t.xb = function (e) {
              var n = this
              return Lh(
                this,
                this.I()
                  .then(function (t) {
                    return n.a.xb(t, e)
                  })
                  .then(function (t) {
                    return Nh(n, t), n.reload()
                  })
              )
            }),
            (t.cd = function (e) {
              var n = this
              return Lh(
                this,
                this.I()
                  .then(function (t) {
                    return e.b(n.a, t)
                  })
                  .then(function (t) {
                    return Nh(n, t), n.reload()
                  })
              )
            }),
            (t.yb = function (e) {
              var n = this
              return Lh(
                this,
                this.I()
                  .then(function (t) {
                    return n.a.yb(t, e)
                  })
                  .then(function (t) {
                    return Nh(n, t), n.reload()
                  })
              )
            }),
            (t.zb = function (e) {
              if (void 0 === e.displayName && void 0 === e.photoURL)
                return wh(this)
              var n = this
              return Lh(
                this,
                this.I()
                  .then(function (t) {
                    return n.a.zb(t, {
                      displayName: e.displayName,
                      photoUrl: e.photoURL,
                    })
                  })
                  .then(function (t) {
                    return (
                      Nh(n, t),
                      Ah(n, "displayName", t.displayName || null),
                      Ah(n, "photoURL", t.photoUrl || null),
                      U(n.providerData, function (t) {
                        "password" === t.providerId &&
                          (qi(t, "displayName", n.displayName),
                          qi(t, "photoURL", n.photoURL))
                      }),
                      mh(n)
                    )
                  })
                  .then(yh)
              )
            }),
            (t.ad = function (e) {
              var n = this
              return Lh(
                this,
                Sh(this).then(function (t) {
                  return H(Ih(n), e)
                    ? Xs(n.a, ys, { idToken: t, deleteProvider: [e] }).then(
                        function (t) {
                          var e = {}
                          return (
                            U(t.providerUserInfo || [], function (t) {
                              e[t.providerId] = !0
                            }),
                            U(Ih(n), function (t) {
                              e[t] || Eh(n, t)
                            }),
                            e[_o.PROVIDER_ID] || qi(n, "phoneNumber", null),
                            mh(n)
                          )
                        }
                      )
                    : mh(n).then(function () {
                        throw new I("no-such-provider")
                      })
                })
              )
            }),
            (t.delete = function () {
              var e = this
              return Lh(
                this,
                this.I()
                  .then(function (t) {
                    return Xs(e.a, bs, { idToken: t })
                  })
                  .then(function () {
                    e.dispatchEvent(new $c("userDeleted"))
                  })
              ).then(function () {
                for (var t = 0; t < e.N.length; t++)
                  e.N[t].cancel("app-deleted")
                ch(e, null),
                  lh(e, null),
                  (e.N = []),
                  (e.D = !0),
                  ph(e),
                  qi(e, "refreshToken", null),
                  e.i && Ac(e.i, e)
              })
            }),
            (t.Cb = function (t, e) {
              return !!(
                ("linkViaPopup" == t && (this.g || null) == e && this.f) ||
                ("reauthViaPopup" == t && (this.g || null) == e && this.f) ||
                ("linkViaRedirect" == t && (this.fa || null) == e) ||
                ("reauthViaRedirect" == t && (this.fa || null) == e)
              )
            }),
            (t.la = function (t, e, n, i) {
              ;("linkViaPopup" != t && "reauthViaPopup" != t) ||
                i != (this.g || null) ||
                (n && this.w ? this.w(n) : e && !n && this.f && this.f(e),
                this.c && (this.c.cancel(), (this.c = null)),
                delete this.f,
                delete this.w)
            }),
            (t.Da = function (t, e) {
              return "linkViaPopup" == t && e == (this.g || null)
                ? b(this.Hb, this)
                : "reauthViaPopup" == t && e == (this.g || null)
                ? b(this.Ib, this)
                : "linkViaRedirect" == t && (this.fa || null) == e
                ? b(this.Hb, this)
                : "reauthViaRedirect" == t && (this.fa || null) == e
                ? b(this.Ib, this)
                : null
            }),
            (t.Cc = function (t) {
              var e = this
              return Ch(
                this,
                "linkViaPopup",
                t,
                function () {
                  return _h(e, t.providerId).then(function () {
                    return mh(e)
                  })
                },
                !1
              )
            }),
            (t.Lc = function (t) {
              return Ch(
                this,
                "reauthViaPopup",
                t,
                function () {
                  return Te()
                },
                !0
              )
            }),
            (t.Dc = function (t) {
              var e = this
              return Dh(
                this,
                "linkViaRedirect",
                t,
                function () {
                  return _h(e, t.providerId)
                },
                !1
              )
            }),
            (t.Mc = function (t) {
              return Dh(
                this,
                "reauthViaRedirect",
                t,
                function () {
                  return Te()
                },
                !0
              )
            }),
            (t.Hb = function (e, n, t, i) {
              var r = this
              this.c && (this.c.cancel(), (this.c = null))
              var o = null
              return (
                (t = this.I()
                  .then(function (t) {
                    return ls(r.a, {
                      requestUri: e,
                      postBody: i,
                      sessionId: n,
                      idToken: t,
                    })
                  })
                  .then(function (t) {
                    return (o = Oh(r, t, "link")), Rh(r, t)
                  })
                  .then(function () {
                    return o
                  })),
                Lh(this, t)
              )
            }),
            (t.Ib = function (t, e, n, i) {
              var r = this
              this.c && (this.c.cancel(), (this.c = null))
              var o = null
              return Lh(
                this,
                Te()
                  .then(function () {
                    return eo(
                      fs(r.a, {
                        requestUri: t,
                        sessionId: e,
                        postBody: i,
                        tenantId: n,
                      }),
                      r.uid
                    )
                  })
                  .then(function (t) {
                    return (
                      (o = Oh(r, t, "reauthenticate")),
                      Nh(r, t),
                      (r.h = null),
                      r.reload()
                    )
                  })
                  .then(function () {
                    return o
                  }),
                !0
              )
            }),
            (t.qb = function (e) {
              var n = this,
                i = null
              return Lh(
                this,
                this.I()
                  .then(function (t) {
                    return (i = t), void 0 === e || ut(e) ? {} : Cr(new Ir(e))
                  })
                  .then(function (t) {
                    return n.a.qb(i, t)
                  })
                  .then(function (t) {
                    if (n.email != t) return n.reload()
                  })
                  .then(function () {})
              )
            }),
            (t.Ab = function (e, n) {
              var i = this,
                r = null
              return Lh(
                this,
                this.I()
                  .then(function (t) {
                    return (r = t), void 0 === n || ut(n) ? {} : Cr(new Ir(n))
                  })
                  .then(function (t) {
                    return i.a.Ab(r, e, t)
                  })
                  .then(function (t) {
                    if (i.email != t) return i.reload()
                  })
                  .then(function () {})
              )
            }),
            (t.hc = function (t) {
              var e = null,
                n = this
              return Lh(
                this,
                (t = eo(Te(t), n.uid)
                  .then(function (t) {
                    return (
                      (e = Oh(n, t, "reauthenticate")),
                      Nh(n, t),
                      (n.h = null),
                      n.reload()
                    )
                  })
                  .then(function () {
                    return e
                  })),
                !0
              )
            }),
            (t.toJSON = function () {
              return this.v()
            }),
            (t.v = function () {
              var e = {
                uid: this.uid,
                displayName: this.displayName,
                photoURL: this.photoURL,
                email: this.email,
                emailVerified: this.emailVerified,
                phoneNumber: this.phoneNumber,
                isAnonymous: this.isAnonymous,
                tenantId: this.tenantId,
                providerData: [],
                apiKey: this.l,
                appName: this.m,
                authDomain: this.s,
                stsTokenManager: this.b.v(),
                redirectEventId: this.fa || null,
              }
              return (
                this.metadata && lt(e, this.metadata.v()),
                U(this.providerData, function (t) {
                  e.providerData.push(
                    (function (t) {
                      var e,
                        n = {}
                      for (e in t) t.hasOwnProperty(e) && (n[e] = t[e])
                      return n
                    })(t)
                  )
                }),
                lt(e, this.O.v()),
                e
              )
            })
          var jh = { name: "redirectUser", F: "session" }
          function Uh(t) {
            return Xu(t.b, jh, t.a)
          }
          function Vh(t) {
            var e, n, i, r
            ;(this.a = t),
              (this.b = Gu()),
              (this.c = null),
              (this.f =
                ((n = Hh("local")),
                (i = Hh("session")),
                (r = Hh("none")),
                (function (n, i, r) {
                  var o = Wu(i, r),
                    a = Bu(n, i.F)
                  return n.get(i, r).then(function (t) {
                    var e = null
                    try {
                      e = Oi(l.localStorage.getItem(o))
                    } catch (t) {}
                    if (e && !t)
                      return l.localStorage.removeItem(o), n.set(i, e, r)
                    e &&
                      t &&
                      "localStorage" != a.type &&
                      l.localStorage.removeItem(o)
                  })
                })((e = this).b, n, e.a)
                  .then(function () {
                    return e.b.get(i, e.a)
                  })
                  .then(function (t) {
                    return t
                      ? i
                      : e.b.get(r, e.a).then(function (t) {
                          return t
                            ? r
                            : e.b.get(n, e.a).then(function (t) {
                                return t
                                  ? n
                                  : e.b.get(qh, e.a).then(function (t) {
                                      return t ? Hh(t) : n
                                    })
                              })
                        })
                  })
                  .then(function (t) {
                    return (e.c = t), Fh(e, t.F)
                  })
                  .o(function () {
                    e.c || (e.c = n)
                  }))),
              this.b.addListener(Hh("local"), this.a, b(this.g, this))
          }
          function Fh(t, e) {
            var n,
              s,
              i = []
            for (n in Hu) Hu[n] !== e && i.push(Xu(t.b, Hh(Hu[n]), t.a))
            return (
              i.push(Xu(t.b, qh, t.a)),
              (s = i),
              new ve(function (n, e) {
                var i = s.length,
                  r = []
                if (i)
                  for (
                    var t = function (t, e) {
                        i--, (r[t] = e), 0 == i && n(r)
                      },
                      o = function (t) {
                        e(t)
                      },
                      a = 0;
                    a < s.length;
                    a++
                  )
                    Ae(s[a], y(t, a), o)
                else n(r)
              })
            )
          }
          Vh.prototype.g = function () {
            var e = this,
              n = Hh("local")
            Wh(this, function () {
              return Te()
                .then(function () {
                  return e.c && "local" != e.c.F ? e.b.get(n, e.a) : null
                })
                .then(function (t) {
                  if (t)
                    return Fh(e, "local").then(function () {
                      e.c = n
                    })
                })
            })
          }
          var qh = { name: "persistence", F: "session" }
          function Hh(t) {
            return { name: "authUser", F: t }
          }
          function Kh(t, e) {
            return Wh(t, function () {
              return t.b.set(t.c, e.v(), t.a)
            })
          }
          function Gh(t) {
            return Wh(t, function () {
              return Xu(t.b, t.c, t.a)
            })
          }
          function Bh(t, e) {
            return Wh(t, function () {
              return t.b.get(t.c, t.a).then(function (t) {
                return t && e && (t.authDomain = e), Mh(t || {})
              })
            })
          }
          function Wh(t, e) {
            return (t.f = t.f.then(e, e)), t.f
          }
          function Xh(t) {
            if (
              ((this.l = !1),
              qi(this, "settings", new Vc()),
              qi(this, "app", t),
              !el(this).options || !el(this).options.apiKey)
            )
              throw new I("invalid-api-key")
            var n, e, i, r, o, a, s, u
            ;(t = Xl.SDK_VERSION ? yi(Xl.SDK_VERSION) : null),
              (this.b = new Ha(
                el(this).options && el(this).options.apiKey,
                N(E),
                t
              )),
              (this.P = []),
              (this.m = []),
              (this.O = []),
              (this.$b = Xl.INTERNAL.createSubscribe(b(this.xc, this))),
              (this.W = void 0),
              (this.ac = Xl.INTERNAL.createSubscribe(b(this.yc, this))),
              Qh(this, null),
              (this.i = new Vh(el(this).options.apiKey + ":" + el(this).name)),
              (this.B = new xh(el(this).options.apiKey + ":" + el(this).name)),
              (this.Z = ol(
                this,
                ((e = el((n = this)).options.authDomain),
                (i = (function (e) {
                  var t = (function (t, e) {
                    return t.b.get(jh, t.a).then(function (t) {
                      return t && e && (t.authDomain = e), Mh(t || {})
                    })
                  })(e.B, el(e).options.authDomain).then(function (t) {
                    return (e.D = t) && (t.ga = e.B), Uh(e.B)
                  })
                  return ol(e, t)
                })(n)
                  .then(function () {
                    return Bh(n.i, e)
                  })
                  .then(function (e) {
                    return e
                      ? ((e.ga = n.B),
                        n.D && (n.D.fa || null) == (e.fa || null)
                          ? e
                          : e
                              .reload()
                              .then(function () {
                                return Kh(n.i, e).then(function () {
                                  return e
                                })
                              })
                              .o(function (t) {
                                return "auth/network-request-failed" == t.code
                                  ? e
                                  : Gh(n.i)
                              }))
                      : null
                  })
                  .then(function (t) {
                    Qh(n, t || null)
                  })),
                ol(n, i))
              )),
              (this.h = ol(
                this,
                (r = this).Z.then(function () {
                  return $h(r)
                })
                  .o(function () {})
                  .then(function () {
                    if (!r.l) return r.oa()
                  })
                  .o(function () {})
                  .then(function () {
                    if (!r.l) {
                      r.aa = !0
                      var t = r.i
                      t.b.addListener(Hh("local"), t.a, r.oa)
                    }
                  })
              )),
              (this.aa = !1),
              (this.oa = b(this.Xc, this)),
              (this.Ma = b(this.ca, this)),
              (this.xa = b(this.jc, this)),
              (this.ya = b(this.uc, this)),
              (this.za = b(this.vc, this)),
              (this.a = null),
              (a = el((o = this)).options.authDomain),
              (s = el(o).options.apiKey),
              a &&
                Ei() &&
                (o.Zb = o.Z.then(function () {
                  if (!o.l) {
                    if (
                      ((o.a = Dc(a, s, el(o).name)),
                      Ec(o.a, o),
                      nl(o) && gh(nl(o)),
                      o.D)
                    ) {
                      gh(o.D)
                      var t = o.D
                      t.va(o.ja()),
                        ch(t, o),
                        hh((t = o.D), o.N),
                        lh(t, o),
                        (o.D = null)
                    }
                    return o.a
                  }
                })),
              (this.INTERNAL = {}),
              (this.INTERNAL.delete = b(this.delete, this)),
              (this.INTERNAL.logFramework = b(this.Ec, this)),
              (this.s = 0),
              pn.call(this),
              (u = this),
              Object.defineProperty(u, "lc", {
                get: function () {
                  return this.ja()
                },
                set: function (t) {
                  this.va(t)
                },
                enumerable: !1,
              }),
              (u.$ = null),
              Object.defineProperty(u, "ti", {
                get: function () {
                  return this.S()
                },
                set: function (t) {
                  this.ub(t)
                },
                enumerable: !1,
              }),
              (u.R = null),
              (this.N = [])
          }
          function Jh(t) {
            Ke.call(this, "languageCodeChanged"), (this.g = t)
          }
          function Yh(t) {
            Ke.call(this, "frameworkChanged"), (this.c = t)
          }
          function zh(t) {
            return t.Zb || Ee(new I("auth-domain-config-required"))
          }
          function $h(t) {
            if (!Ei())
              return Ee(new I("operation-not-supported-in-this-environment"))
            var e = zh(t)
              .then(function () {
                return t.a.pa()
              })
              .then(function (t) {
                return t ? Ki(t) : null
              })
            return ol(t, e)
          }
          function Zh(o, a) {
            var s = {}
            return (
              (s.apiKey = el(o).options.apiKey),
              (s.authDomain = el(o).options.authDomain),
              (s.appName = el(o).name),
              o.Z.then(function () {
                return (
                  (t = s),
                  (e = a),
                  (n = o.B),
                  (i = o.Ea()),
                  (r = new uh(t, e)),
                  n && (r.ga = n),
                  i && hh(r, i),
                  r.reload().then(function () {
                    return r
                  })
                )
                var t, e, n, i, r
              })
                .then(function (t) {
                  return (
                    nl(o) && t.uid == nl(o).uid
                      ? kh(nl(o), t)
                      : (Qh(o, t), gh(t)),
                    o.ca(t)
                  )
                })
                .then(function () {
                  rl(o)
                })
            )
          }
          function Qh(t, e) {
            var n, i
            nl(t) &&
              ((n = nl(t)),
              (i = t.Ma),
              G(n.R, function (t) {
                return t == i
              }),
              on(nl(t), "tokenChanged", t.xa),
              on(nl(t), "userDeleted", t.ya),
              on(nl(t), "userInvalidated", t.za),
              ph(nl(t))),
              e &&
                (e.R.push(t.Ma),
                en(e, "tokenChanged", t.xa),
                en(e, "userDeleted", t.ya),
                en(e, "userInvalidated", t.za),
                0 < t.s && dh(e)),
              qi(t, "currentUser", e),
              e && (e.va(t.ja()), ch(e, t), hh(e, t.N), lh(e, t))
          }
          function tl(n, t) {
            var e = null,
              i = null
            return ol(
              n,
              t
                .then(
                  function (t) {
                    return (e = Ro(t)), (i = qr(t)), Zh(n, t)
                  },
                  function (t) {
                    var e = null
                    throw (
                      (t &&
                        "auth/multi-factor-auth-required" === t.code &&
                        (e = Xc(t.v(), n, b(n.ic, n))),
                      e || t)
                    )
                  }
                )
                .then(function () {
                  return Ki({
                    user: nl(n),
                    credential: e,
                    additionalUserInfo: i,
                    operationType: "signIn",
                  })
                })
            )
          }
          function el(t) {
            return t.app
          }
          function nl(t) {
            return t.currentUser
          }
          function il(t) {
            return (nl(t) && nl(t)._lat) || null
          }
          function rl(t) {
            if (t.aa) {
              for (var e = 0; e < t.m.length; e++) t.m[e] && t.m[e](il(t))
              if (t.W !== t.getUid() && t.O.length)
                for (t.W = t.getUid(), e = 0; e < t.O.length; e++)
                  t.O[e] && t.O[e](il(t))
            }
          }
          function ol(t, e) {
            return (
              t.P.push(e),
              e.ma(function () {
                K(t.P, e)
              }),
              e
            )
          }
          function al() {}
          function sl() {
            ;(this.a = {}), (this.b = 1e12)
          }
          ;(Vh.prototype.tb = function (e) {
            var n = null,
              i = this
            return (
              (function (t) {
                var e = new I("invalid-persistence-type"),
                  n = new I("unsupported-persistence-type")
                t: {
                  for (i in Hu)
                    if (Hu[i] == t) {
                      var i = !0
                      break t
                    }
                  i = !1
                }
                if (!i || "string" != typeof t) throw e
                switch (di()) {
                  case "ReactNative":
                    if ("session" === t) throw n
                    break
                  case "Node":
                    if ("none" !== t) throw n
                    break
                  case "Worker":
                    if ("session" === t || (!Iu() && "none" !== t)) throw n
                    break
                  default:
                    if (!Ti() && "none" !== t) throw n
                }
              })(e),
              Wh(this, function () {
                return e != i.c.F
                  ? i.b
                      .get(i.c, i.a)
                      .then(function (t) {
                        return (n = t), Fh(i, e)
                      })
                      .then(function () {
                        if (((i.c = Hh(e)), n)) return i.b.set(i.c, n, i.a)
                      })
                  : Te()
              })
            )
          }),
            e(Xh, pn),
            e(Jh, Ke),
            e(Yh, Ke),
            ((t = Xh.prototype).tb = function (t) {
              return (t = this.i.tb(t)), ol(this, t)
            }),
            (t.va = function (t) {
              this.$ === t ||
                this.l ||
                ((this.$ = t),
                Ya(this.b, this.$),
                this.dispatchEvent(new Jh(this.ja())))
            }),
            (t.ja = function () {
              return this.$
            }),
            (t.dd = function () {
              var t = l.navigator
              this.va(
                (t &&
                  ((t.languages && t.languages[0]) ||
                    t.language ||
                    t.userLanguage)) ||
                  null
              )
            }),
            (t.Ec = function (t) {
              this.N.push(t),
                za(this.b, Xl.SDK_VERSION ? yi(Xl.SDK_VERSION, this.N) : null),
                this.dispatchEvent(new Yh(this.N))
            }),
            (t.Ea = function () {
              return W(this.N)
            }),
            (t.ub = function (t) {
              this.R === t || this.l || ((this.R = t), (this.b.b = this.R))
            }),
            (t.S = function () {
              return this.R
            }),
            (t.toJSON = function () {
              return {
                apiKey: el(this).options.apiKey,
                authDomain: el(this).options.authDomain,
                appName: el(this).name,
                currentUser: nl(this) && nl(this).v(),
              }
            }),
            (t.Cb = function (t, e) {
              switch (t) {
                case "unknown":
                case "signInViaRedirect":
                  return !0
                case "signInViaPopup":
                  return this.g == e && !!this.f
                default:
                  return !1
              }
            }),
            (t.la = function (t, e, n, i) {
              "signInViaPopup" == t &&
                this.g == i &&
                (n && this.w ? this.w(n) : e && !n && this.f && this.f(e),
                this.c && (this.c.cancel(), (this.c = null)),
                delete this.f,
                delete this.w)
            }),
            (t.Da = function (t, e) {
              return "signInViaRedirect" == t ||
                ("signInViaPopup" == t && this.g == e && this.f)
                ? b(this.gc, this)
                : null
            }),
            (t.gc = function (t, e, n, i) {
              var r = this,
                o = { requestUri: t, postBody: i, sessionId: e, tenantId: n }
              return (
                this.c && (this.c.cancel(), (this.c = null)),
                r.Z.then(function () {
                  return tl(r, hs(r.b, o))
                })
              )
            }),
            (t.Vc = function (e) {
              if (!Ei())
                return Ee(new I("operation-not-supported-in-this-environment"))
              var n = this,
                t = Fr(e.providerId),
                i = Ri(),
                r = null
              ;(!Si() || li()) &&
                el(this).options.authDomain &&
                e.isOAuthProvider &&
                (r = uu(
                  el(this).options.authDomain,
                  el(this).options.apiKey,
                  el(this).name,
                  "signInViaPopup",
                  e,
                  null,
                  i,
                  Xl.SDK_VERSION || null,
                  null,
                  null,
                  this.S()
                ))
              var o = ai(r, t && t.ta, t && t.sa)
              return ol(
                this,
                (t = zh(this)
                  .then(function (t) {
                    return Nc(t, o, "signInViaPopup", e, i, !!r, n.S())
                  })
                  .then(function () {
                    return new ve(function (t, e) {
                      n.la(
                        "signInViaPopup",
                        null,
                        new I("cancelled-popup-request"),
                        n.g
                      ),
                        (n.f = t),
                        (n.w = e),
                        (n.g = i),
                        (n.c = Rc(n.a, n, "signInViaPopup", o, i))
                    })
                  })
                  .then(function (t) {
                    return o && oi(o), t ? Ki(t) : null
                  })
                  .o(function (t) {
                    throw (o && oi(o), t)
                  }))
              )
            }),
            (t.Wc = function (t) {
              if (!Ei())
                return Ee(new I("operation-not-supported-in-this-environment"))
              var e = this
              return ol(
                this,
                zh(this)
                  .then(function () {
                    return Wh((t = e.i), function () {
                      return t.b.set(qh, t.c.F, t.a)
                    })
                    var t
                  })
                  .then(function () {
                    return Oc(e.a, "signInViaRedirect", t, void 0, e.S())
                  })
              )
            }),
            (t.pa = function () {
              var e = this
              return $h(this)
                .then(function (t) {
                  return e.a && Mc(e.a.b), t
                })
                .o(function (t) {
                  throw (e.a && Mc(e.a.b), t)
                })
            }),
            (t.bd = function (t) {
              if (!t) return Ee(new I("null-user"))
              if (this.R != t.tenantId) return Ee(new I("tenant-id-mismatch"))
              var e = this,
                n = {}
              ;(n.apiKey = el(this).options.apiKey),
                (n.authDomain = el(this).options.authDomain),
                (n.appName = el(this).name)
              var i,
                r,
                o,
                a,
                s,
                u,
                c =
                  ((i = t),
                  (r = n),
                  (o = e.B),
                  (a = e.Ea()),
                  (s = i.b),
                  ((u = {})[Ga] = s.b && s.b.toString()),
                  (u.refreshToken = s.a),
                  (r = new uh(
                    r || { apiKey: i.l, authDomain: i.s, appName: i.m },
                    u
                  )),
                  o && (r.ga = o),
                  a && hh(r, a),
                  kh(r, i),
                  r)
              return ol(
                this,
                this.h
                  .then(function () {
                    if (el(e).options.apiKey != t.l) return c.reload()
                  })
                  .then(function () {
                    return nl(e) && t.uid == nl(e).uid
                      ? (kh(nl(e), t), e.ca(t))
                      : (Qh(e, c), gh(c), e.ca(c))
                  })
                  .then(function () {
                    rl(e)
                  })
              )
            }),
            (t.wb = function () {
              var t = this,
                e = this.h.then(function () {
                  return (
                    t.a && Mc(t.a.b),
                    nl(t)
                      ? (Qh(t, null),
                        Gh(t.i).then(function () {
                          rl(t)
                        }))
                      : Te()
                  )
                })
              return ol(this, e)
            }),
            (t.Xc = function () {
              var i = this
              return Bh(this.i, el(this).options.authDomain).then(function (t) {
                if (!i.l) {
                  var e
                  if ((e = nl(i) && t)) {
                    e = nl(i).uid
                    var n = t.uid
                    e = null != e && "" !== e && null != n && "" !== n && e == n
                  }
                  if (e) return kh(nl(i), t), nl(i).I()
                  ;(nl(i) || t) &&
                    (Qh(i, t),
                    t && (gh(t), (t.ga = i.B)),
                    i.a && Ec(i.a, i),
                    rl(i))
                }
              })
            }),
            (t.ca = function (t) {
              return Kh(this.i, t)
            }),
            (t.jc = function () {
              rl(this), this.ca(nl(this))
            }),
            (t.uc = function () {
              this.wb()
            }),
            (t.vc = function () {
              this.wb()
            }),
            (t.ic = function (t) {
              var e = this
              return this.h.then(function () {
                return tl(e, Te(t))
              })
            }),
            (t.xc = function (t) {
              var e = this
              this.addAuthTokenListener(function () {
                t.next(nl(e))
              })
            }),
            (t.yc = function (t) {
              var e,
                n,
                i = this
              ;(n = function () {
                t.next(nl(i))
              }),
                (e = this).O.push(n),
                ol(
                  e,
                  e.h.then(function () {
                    !e.l &&
                      H(e.O, n) &&
                      e.W !== e.getUid() &&
                      ((e.W = e.getUid()), n(il(e)))
                  })
                )
            }),
            (t.Gc = function (t, e, n) {
              var i = this
              return (
                this.aa &&
                  Promise.resolve().then(function () {
                    p(t) ? t(nl(i)) : p(t.next) && t.next(nl(i))
                  }),
                this.$b(t, e, n)
              )
            }),
            (t.Fc = function (t, e, n) {
              var i = this
              return (
                this.aa &&
                  Promise.resolve().then(function () {
                    ;(i.W = i.getUid()),
                      p(t) ? t(nl(i)) : p(t.next) && t.next(nl(i))
                  }),
                this.ac(t, e, n)
              )
            }),
            (t.kc = function (t) {
              var e = this,
                n = this.h.then(function () {
                  return nl(e)
                    ? nl(e)
                        .I(t)
                        .then(function (t) {
                          return { accessToken: t }
                        })
                    : null
                })
              return ol(this, n)
            }),
            (t.Rc = function (t) {
              var n = this
              return this.h
                .then(function () {
                  return tl(n, Xs(n.b, qs, { token: t }))
                })
                .then(function (t) {
                  var e = t.user
                  return Ah(e, "isAnonymous", !1), n.ca(e), t
                })
            }),
            (t.Sc = function (t, e) {
              var n = this
              return this.h.then(function () {
                return tl(n, Xs(n.b, Hs, { email: t, password: e }))
              })
            }),
            (t.cc = function (t, e) {
              var n = this
              return this.h.then(function () {
                return tl(n, Xs(n.b, ms, { email: t, password: e }))
              })
            }),
            (t.Ya = function (t) {
              var e = this
              return this.h.then(function () {
                return tl(e, t.ia(e.b))
              })
            }),
            (t.Qc = function (t) {
              return (
                Vi(
                  "firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."
                ),
                this.Ya(t)
              )
            }),
            (t.vb = function () {
              var n = this
              return this.h.then(function () {
                var t = nl(n)
                if (t && t.isAnonymous) {
                  var e = Ki({ providerId: null, isNewUser: !1 })
                  return Ki({
                    user: t,
                    credential: null,
                    additionalUserInfo: e,
                    operationType: "signIn",
                  })
                }
                return tl(n, n.b.vb()).then(function (t) {
                  var e = t.user
                  return Ah(e, "isAnonymous", !0), n.ca(e), t
                })
              })
            }),
            (t.getUid = function () {
              return (nl(this) && nl(this).uid) || null
            }),
            (t.bc = function (t) {
              this.addAuthTokenListener(t),
                this.s++,
                0 < this.s && nl(this) && dh(nl(this))
            }),
            (t.Nc = function (e) {
              var n = this
              U(this.m, function (t) {
                t == e && n.s--
              }),
                this.s < 0 && (this.s = 0),
                0 == this.s && nl(this) && ph(nl(this)),
                this.removeAuthTokenListener(e)
            }),
            (t.addAuthTokenListener = function (t) {
              var e = this
              this.m.push(t),
                ol(
                  this,
                  this.h.then(function () {
                    e.l || (H(e.m, t) && t(il(e)))
                  })
                )
            }),
            (t.removeAuthTokenListener = function (e) {
              G(this.m, function (t) {
                return t == e
              })
            }),
            (t.delete = function () {
              this.l = !0
              for (var t = 0; t < this.P.length; t++)
                this.P[t].cancel("app-deleted")
              return (
                (this.P = []),
                this.i &&
                  (t = this.i).b.removeListener(Hh("local"), t.a, this.oa),
                this.a && (Ac(this.a, this), Mc(this.a.b)),
                Promise.resolve()
              )
            }),
            (t.fc = function (t) {
              return ol(
                this,
                Xs(this.b, gs, {
                  identifier: t,
                  continueUri: Ai() ? ni() : "http://localhost",
                }).then(function (t) {
                  return t.signinMethods || []
                })
              )
            }),
            (t.zc = function (t) {
              return !!Ao(t)
            }),
            (t.sb = function (e, n) {
              var i = this
              return ol(
                this,
                Te()
                  .then(function () {
                    var t = new Ir(n)
                    if (!t.c)
                      throw new I(
                        "argument-error",
                        Ar + " must be true when sending sign in link to email"
                      )
                    return Cr(t)
                  })
                  .then(function (t) {
                    return i.b.sb(e, t)
                  })
                  .then(function () {})
              )
            }),
            (t.fd = function (t) {
              return this.Pa(t).then(function (t) {
                return t.data.email
              })
            }),
            (t.jb = function (t, e) {
              return ol(
                this,
                this.b.jb(t, e).then(function () {})
              )
            }),
            (t.Pa = function (t) {
              return ol(
                this,
                this.b.Pa(t).then(function (t) {
                  return new Zi(t)
                })
              )
            }),
            (t.fb = function (t) {
              return ol(
                this,
                this.b.fb(t).then(function () {})
              )
            }),
            (t.rb = function (e, t) {
              var n = this
              return ol(
                this,
                Te()
                  .then(function () {
                    return void 0 === t || ut(t) ? {} : Cr(new Ir(t))
                  })
                  .then(function (t) {
                    return n.b.rb(e, t)
                  })
                  .then(function () {})
              )
            }),
            (t.Uc = function (t, e) {
              return ol(this, qc(this, t, e, b(this.Ya, this)))
            }),
            (t.Tc = function (n, i) {
              var r = this
              return ol(
                this,
                Te().then(function () {
                  var t = i || ni(),
                    e = Eo(n, t)
                  if (!(t = Ao(t)))
                    throw new I("argument-error", "Invalid email link!")
                  if (t.tenantId !== r.S()) throw new I("tenant-id-mismatch")
                  return r.Ya(e)
                })
              )
            }),
            (al.prototype.render = function () {}),
            (al.prototype.reset = function () {}),
            (al.prototype.getResponse = function () {}),
            (al.prototype.execute = function () {})
          var ul = null
          function cl(t, e) {
            return ((e = hl(e)) && t.a[e]) || null
          }
          function hl(t) {
            return (t = void 0 === t ? 1e12 : t) ? t.toString() : null
          }
          function ll(t, e) {
            ;(this.g = !1),
              (this.c = e),
              (this.a = this.b = null),
              (this.h = "invisible" !== this.c.size),
              (this.f = ee(t))
            var n = this
            ;(this.i = function () {
              n.execute()
            }),
              this.h ? this.execute() : en(this.f, "click", this.i)
          }
          function fl(t) {
            if (t.g) throw Error("reCAPTCHA mock was already deleted!")
          }
          function dl() {}
          function pl() {}
          ;(sl.prototype.render = function (t, e) {
            return (this.a[this.b.toString()] = new ll(t, e)), this.b++
          }),
            (sl.prototype.reset = function (t) {
              var e = cl(this, t)
              ;(t = hl(t)), e && t && (e.delete(), delete this.a[t])
            }),
            (sl.prototype.getResponse = function (t) {
              return (t = cl(this, t)) ? t.getResponse() : null
            }),
            (sl.prototype.execute = function (t) {
              ;(t = cl(this, t)) && t.execute()
            }),
            (ll.prototype.getResponse = function () {
              return fl(this), this.b
            }),
            (ll.prototype.execute = function () {
              fl(this)
              var n = this
              this.a ||
                (this.a = setTimeout(function () {
                  n.b = (function () {
                    for (var t = 50, e = []; 0 < t; )
                      e.push(
                        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                          Math.floor(62 * Math.random())
                        )
                      ),
                        t--
                    return e.join("")
                  })()
                  var t = n.c.callback,
                    e = n.c["expired-callback"]
                  if (t)
                    try {
                      t(n.b)
                    } catch (t) {}
                  n.a = setTimeout(function () {
                    if (((n.a = null), (n.b = null), e))
                      try {
                        e()
                      } catch (t) {}
                    n.h && n.execute()
                  }, 6e4)
                }, 500))
            }),
            (ll.prototype.delete = function () {
              fl(this),
                (this.g = !0),
                clearTimeout(this.a),
                (this.a = null),
                on(this.f, "click", this.i)
            }),
            qi(dl, "FACTOR_ID", "phone"),
            (pl.prototype.g = function () {
              return Te((ul = ul || new sl()))
            }),
            (pl.prototype.c = function () {})
          var vl = null
          function ml() {
            ;(this.b = l.grecaptcha ? 1 / 0 : 0),
              (this.f = null),
              (this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString())
          }
          var gl = new dt(
              mt,
              "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"
            ),
            bl = new Pi(3e4, 6e4)
          ;(ml.prototype.g = function (r) {
            var o = this
            return new ve(function (t, e) {
              var i = setTimeout(function () {
                e(new I("network-request-failed"))
              }, bl.get())
              !l.grecaptcha || (r !== o.f && !o.b)
                ? ((l[o.a] = function () {
                    if (l.grecaptcha) {
                      o.f = r
                      var n = l.grecaptcha.render
                      ;(l.grecaptcha.render = function (t, e) {
                        return (t = n(t, e)), o.b++, t
                      }),
                        clearTimeout(i),
                        t(l.grecaptcha)
                    } else clearTimeout(i), e(new I("internal-error"))
                    delete l[o.a]
                  }),
                  Te(Ma(wt(gl, { onload: o.a, hl: r || "" }))).o(function () {
                    clearTimeout(i),
                      e(
                        new I(
                          "internal-error",
                          "Unable to load external reCAPTCHA dependencies!"
                        )
                      )
                  }))
                : (clearTimeout(i), t(l.grecaptcha))
            })
          }),
            (ml.prototype.c = function () {
              this.b--
            })
          var yl = null
          function wl(t, e, n, i, r, o, a) {
            if (
              (qi(this, "type", "recaptcha"),
              (this.c = this.f = null),
              (this.D = !1),
              (this.u = e),
              (this.g = null),
              (a = a ? (vl = vl || new pl()) : (yl = yl || new ml())),
              (this.m = a),
              (this.a = n || { theme: "light", type: "image" }),
              (this.h = []),
              this.a[El])
            )
              throw new I(
                "argument-error",
                "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project."
              )
            if (((this.i = "invisible" === this.a[Al]), !l.document))
              throw new I(
                "operation-not-supported-in-this-environment",
                "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support."
              )
            if (!ee(e) || (!this.i && ee(e).hasChildNodes()))
              throw new I(
                "argument-error",
                "reCAPTCHA container is either not found or already contains inner elements!"
              )
            ;(this.s = new Ha(t, o || null, r || null)),
              (this.w =
                i ||
                function () {
                  return null
                })
            var s = this
            this.l = []
            var u = this.a[Il]
            this.a[Il] = function (t) {
              if ((kl(s, t), "function" == typeof u)) u(t)
              else if ("string" == typeof u) {
                var e = Ii(u, l)
                "function" == typeof e && e(t)
              }
            }
            var c = this.a[Tl]
            this.a[Tl] = function () {
              if ((kl(s, null), "function" == typeof c)) c()
              else if ("string" == typeof c) {
                var t = Ii(c, l)
                "function" == typeof t && t()
              }
            }
          }
          var Il = "callback",
            Tl = "expired-callback",
            El = "sitekey",
            Al = "size"
          function kl(t, e) {
            for (var n = 0; n < t.l.length; n++)
              try {
                t.l[n](e)
              } catch (t) {}
          }
          function Sl(t, e) {
            return (
              t.h.push(e),
              e.ma(function () {
                K(t.h, e)
              }),
              e
            )
          }
          function Nl(t) {
            if (t.D)
              throw new I(
                "internal-error",
                "RecaptchaVerifier instance has been destroyed."
              )
          }
          function _l(t, e, n) {
            var i = !1
            try {
              this.b = n || Xl.app()
            } catch (t) {
              throw new I(
                "argument-error",
                "No firebase.app.App instance is currently initialized."
              )
            }
            if (!this.b.options || !this.b.options.apiKey)
              throw new I("invalid-api-key")
            n = this.b.options.apiKey
            var r = this,
              o = null
            try {
              o = this.b.auth().Ea()
            } catch (t) {}
            try {
              i = this.b.auth().settings.appVerificationDisabledForTesting
            } catch (t) {}
            ;(o = Xl.SDK_VERSION ? yi(Xl.SDK_VERSION, o) : null),
              wl.call(
                this,
                n,
                t,
                e,
                function () {
                  try {
                    var e = r.b.auth().ja()
                  } catch (t) {
                    e = null
                  }
                  return e
                },
                o,
                N(E),
                i
              )
          }
          function Ol(t, e, n, i) {
            t: {
              n = Array.prototype.slice.call(n)
              for (var r = 0, o = !1, a = 0; a < e.length; a++)
                if (e[a].optional) o = !0
                else {
                  if (o)
                    throw new I(
                      "internal-error",
                      "Argument validator encountered a required argument after an optional argument."
                    )
                  r++
                }
              if (((o = e.length), n.length < r || o < n.length))
                i =
                  "Expected " +
                  (r == o
                    ? 1 == r
                      ? "1 argument"
                      : r + " arguments"
                    : r + "-" + o + " arguments") +
                  " but got " +
                  n.length +
                  "."
              else {
                for (r = 0; r < n.length; r++)
                  if (
                    ((o = e[r].optional && void 0 === n[r]),
                    !e[r].K(n[r]) && !o)
                  ) {
                    if (((e = e[r]), r < 0 || r >= Rl.length))
                      throw new I(
                        "internal-error",
                        "Argument validator received an unsupported number of arguments."
                      )
                    ;(n = Rl[r]),
                      (i =
                        (i ? "" : n + " argument ") +
                        (e.name ? '"' + e.name + '" ' : "") +
                        "must be " +
                        e.J +
                        ".")
                    break t
                  }
                i = null
              }
            }
            if (i) throw new I("argument-error", t + " failed: " + i)
          }
          ;((t = wl.prototype).Ga = function () {
            var e = this
            return this.f
              ? this.f
              : (this.f = Sl(
                  this,
                  Te()
                    .then(function () {
                      if (Ai() && !fi()) return ci()
                      throw new I(
                        "operation-not-supported-in-this-environment",
                        "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment."
                      )
                    })
                    .then(function () {
                      return e.m.g(e.w())
                    })
                    .then(function (t) {
                      return (e.g = t), Xs(e.s, Rs, {})
                    })
                    .then(function (t) {
                      e.a[El] = t.recaptchaSiteKey
                    })
                    .o(function (t) {
                      throw ((e.f = null), t)
                    })
                ))
          }),
            (t.render = function () {
              Nl(this)
              var n = this
              return Sl(
                this,
                this.Ga().then(function () {
                  if (null === n.c) {
                    var t = n.u
                    if (!n.i) {
                      var e = ee(t)
                      ;(t = ae("DIV")), e.appendChild(t)
                    }
                    n.c = n.g.render(t, n.a)
                  }
                  return n.c
                })
              )
            }),
            (t.verify = function () {
              Nl(this)
              var r = this
              return Sl(
                this,
                this.render().then(function (e) {
                  return new ve(function (n) {
                    var t = r.g.getResponse(e)
                    if (t) n(t)
                    else {
                      var i = function (t) {
                        var e
                        t &&
                          ((e = i),
                          G(r.l, function (t) {
                            return t == e
                          }),
                          n(t))
                      }
                      r.l.push(i), r.i && r.g.execute(r.c)
                    }
                  })
                })
              )
            }),
            (t.reset = function () {
              Nl(this), null !== this.c && this.g.reset(this.c)
            }),
            (t.clear = function () {
              Nl(this), (this.D = !0), this.m.c()
              for (var t = 0; t < this.h.length; t++)
                this.h[t].cancel(
                  "RecaptchaVerifier instance has been destroyed."
                )
              if (!this.i) {
                t = ee(this.u)
                for (var e; (e = t.firstChild); ) t.removeChild(e)
              }
            }),
            e(_l, wl)
          var Rl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(
            " "
          )
          function Cl(t, e) {
            return {
              name: t || "",
              J: "a valid string",
              optional: !!e,
              K: function (t) {
                return "string" == typeof t
              },
            }
          }
          function Dl(t, e) {
            return {
              name: t || "",
              J: "a boolean",
              optional: !!e,
              K: function (t) {
                return "boolean" == typeof t
              },
            }
          }
          function Pl(t, e) {
            return { name: t || "", J: "a valid object", optional: !!e, K: v }
          }
          function Ll(t, e) {
            return { name: t || "", J: "a function", optional: !!e, K: p }
          }
          function Ml(t, e) {
            return {
              name: t || "",
              J: "null",
              optional: !!e,
              K: function (t) {
                return null === t
              },
            }
          }
          function xl(n) {
            return {
              name: n ? n + "Credential" : "credential",
              J: n ? "a valid " + n + " credential" : "a valid credential",
              optional: !1,
              K: function (t) {
                if (!t) return !1
                var e = !n || t.providerId === n
                return !(!t.ia || !e)
              },
            }
          }
          function jl() {
            return {
              name: "multiFactorAssertion",
              J: "a valid multiFactorAssertion",
              optional: !1,
              K: function (t) {
                return !!t && !!t.ob
              },
            }
          }
          function Ul() {
            return {
              name: "authProvider",
              J: "a valid Auth provider",
              optional: !1,
              K: function (t) {
                return !!(
                  t &&
                  t.providerId &&
                  t.hasOwnProperty &&
                  t.hasOwnProperty("isOAuthProvider")
                )
              },
            }
          }
          function Vl(t, e) {
            return v(t) && "string" == typeof t.type && t.type === e && p(t.Fa)
          }
          function Fl(t) {
            return v(t) && "string" == typeof t.uid
          }
          function ql() {
            return {
              name: "applicationVerifier",
              J: "an implementation of firebase.auth.ApplicationVerifier",
              optional: !1,
              K: function (t) {
                return !(!t || "string" != typeof t.type || !p(t.verify))
              },
            }
          }
          function Hl(e, n, t, i) {
            return {
              name: t || "",
              J: e.J + " or " + n.J,
              optional: !!i,
              K: function (t) {
                return e.K(t) || n.K(t)
              },
            }
          }
          function Kl(t, e) {
            for (var n in e) {
              var i = e[n].name
              t[i] = Wl(i, t[n], e[n].j)
            }
          }
          function Gl(t, e) {
            for (var n in e) {
              var i = e[n].name
              i !== n &&
                Object.defineProperty(t, i, {
                  get: y(function (t) {
                    return this[t]
                  }, n),
                  set: y(
                    function (t, e, n, i) {
                      Ol(t, [n], [i], !0), (this[e] = i)
                    },
                    i,
                    n,
                    e[n].gb
                  ),
                  enumerable: !0,
                })
            }
          }
          function Bl(t, e, n, i) {
            t[e] = Wl(e, n, i)
          }
          function Wl(t, e, n) {
            function i() {
              var t = Array.prototype.slice.call(arguments)
              return Ol(a, n, t), e.apply(this, t)
            }
            if (!n) return e
            var r,
              o,
              a = (o = (o = t).split("."))[o.length - 1]
            for (r in e) i[r] = e[r]
            for (r in e.prototype) i.prototype[r] = e.prototype[r]
            return i
          }
          Kl(Xh.prototype, {
            fb: { name: "applyActionCode", j: [Cl("code")] },
            Pa: { name: "checkActionCode", j: [Cl("code")] },
            jb: {
              name: "confirmPasswordReset",
              j: [Cl("code"), Cl("newPassword")],
            },
            cc: {
              name: "createUserWithEmailAndPassword",
              j: [Cl("email"), Cl("password")],
            },
            fc: { name: "fetchSignInMethodsForEmail", j: [Cl("email")] },
            pa: { name: "getRedirectResult", j: [] },
            zc: { name: "isSignInWithEmailLink", j: [Cl("emailLink")] },
            Fc: {
              name: "onAuthStateChanged",
              j: [
                Hl(Pl(), Ll(), "nextOrObserver"),
                Ll("opt_error", !0),
                Ll("opt_completed", !0),
              ],
            },
            Gc: {
              name: "onIdTokenChanged",
              j: [
                Hl(Pl(), Ll(), "nextOrObserver"),
                Ll("opt_error", !0),
                Ll("opt_completed", !0),
              ],
            },
            rb: {
              name: "sendPasswordResetEmail",
              j: [
                Cl("email"),
                Hl(
                  Pl("opt_actionCodeSettings", !0),
                  Ml(null, !0),
                  "opt_actionCodeSettings",
                  !0
                ),
              ],
            },
            sb: {
              name: "sendSignInLinkToEmail",
              j: [Cl("email"), Pl("actionCodeSettings")],
            },
            tb: { name: "setPersistence", j: [Cl("persistence")] },
            Qc: { name: "signInAndRetrieveDataWithCredential", j: [xl()] },
            vb: { name: "signInAnonymously", j: [] },
            Ya: { name: "signInWithCredential", j: [xl()] },
            Rc: { name: "signInWithCustomToken", j: [Cl("token")] },
            Sc: {
              name: "signInWithEmailAndPassword",
              j: [Cl("email"), Cl("password")],
            },
            Tc: {
              name: "signInWithEmailLink",
              j: [Cl("email"), Cl("emailLink", !0)],
            },
            Uc: { name: "signInWithPhoneNumber", j: [Cl("phoneNumber"), ql()] },
            Vc: { name: "signInWithPopup", j: [Ul()] },
            Wc: { name: "signInWithRedirect", j: [Ul()] },
            bd: {
              name: "updateCurrentUser",
              j: [
                Hl(
                  {
                    name: "user",
                    J: "an instance of Firebase User",
                    optional: !1,
                    K: function (t) {
                      return !!(t && t instanceof uh)
                    },
                  },
                  Ml(),
                  "user"
                ),
              ],
            },
            wb: { name: "signOut", j: [] },
            toJSON: { name: "toJSON", j: [Cl(null, !0)] },
            dd: { name: "useDeviceLanguage", j: [] },
            fd: { name: "verifyPasswordResetCode", j: [Cl("code")] },
          }),
            Gl(Xh.prototype, {
              lc: { name: "languageCode", gb: Hl(Cl(), Ml(), "languageCode") },
              ti: { name: "tenantId", gb: Hl(Cl(), Ml(), "tenantId") },
            }),
            ((Xh.Persistence = Hu).LOCAL = "local"),
            (Xh.Persistence.SESSION = "session"),
            (Xh.Persistence.NONE = "none"),
            Kl(uh.prototype, {
              delete: { name: "delete", j: [] },
              mc: { name: "getIdTokenResult", j: [Dl("opt_forceRefresh", !0)] },
              I: { name: "getIdToken", j: [Dl("opt_forceRefresh", !0)] },
              Ac: { name: "linkAndRetrieveDataWithCredential", j: [xl()] },
              mb: { name: "linkWithCredential", j: [xl()] },
              Bc: { name: "linkWithPhoneNumber", j: [Cl("phoneNumber"), ql()] },
              Cc: { name: "linkWithPopup", j: [Ul()] },
              Dc: { name: "linkWithRedirect", j: [Ul()] },
              Jc: {
                name: "reauthenticateAndRetrieveDataWithCredential",
                j: [xl()],
              },
              pb: { name: "reauthenticateWithCredential", j: [xl()] },
              Kc: {
                name: "reauthenticateWithPhoneNumber",
                j: [Cl("phoneNumber"), ql()],
              },
              Lc: { name: "reauthenticateWithPopup", j: [Ul()] },
              Mc: { name: "reauthenticateWithRedirect", j: [Ul()] },
              reload: { name: "reload", j: [] },
              qb: {
                name: "sendEmailVerification",
                j: [
                  Hl(
                    Pl("opt_actionCodeSettings", !0),
                    Ml(null, !0),
                    "opt_actionCodeSettings",
                    !0
                  ),
                ],
              },
              toJSON: { name: "toJSON", j: [Cl(null, !0)] },
              ad: { name: "unlink", j: [Cl("provider")] },
              xb: { name: "updateEmail", j: [Cl("email")] },
              yb: { name: "updatePassword", j: [Cl("password")] },
              cd: { name: "updatePhoneNumber", j: [xl("phone")] },
              zb: { name: "updateProfile", j: [Pl("profile")] },
              Ab: {
                name: "verifyBeforeUpdateEmail",
                j: [
                  Cl("email"),
                  Hl(
                    Pl("opt_actionCodeSettings", !0),
                    Ml(null, !0),
                    "opt_actionCodeSettings",
                    !0
                  ),
                ],
              },
            }),
            Kl(sl.prototype, {
              execute: { name: "execute" },
              render: { name: "render" },
              reset: { name: "reset" },
              getResponse: { name: "getResponse" },
            }),
            Kl(al.prototype, {
              execute: { name: "execute" },
              render: { name: "render" },
              reset: { name: "reset" },
              getResponse: { name: "getResponse" },
            }),
            Kl(ve.prototype, {
              ma: { name: "finally" },
              o: { name: "catch" },
              then: { name: "then" },
            }),
            Gl(Vc.prototype, {
              appVerificationDisabled: {
                name: "appVerificationDisabledForTesting",
                gb: Dl("appVerificationDisabledForTesting"),
              },
            }),
            Kl(Fc.prototype, {
              confirm: { name: "confirm", j: [Cl("verificationCode")] },
            }),
            Bl(
              to,
              "fromJSON",
              function (t) {
                t = "string" == typeof t ? JSON.parse(t) : t
                for (var e, n = [so, Io, So, ro], i = 0; i < n.length; i++)
                  if ((e = n[i](t))) return e
                return null
              },
              [Hl(Cl(), Pl(), "json")]
            ),
            Bl(
              To,
              "credential",
              function (t, e) {
                return new wo(t, e)
              },
              [Cl("email"), Cl("password")]
            ),
            Kl(wo.prototype, { v: { name: "toJSON", j: [Cl(null, !0)] } }),
            Kl(lo.prototype, {
              Aa: { name: "addScope", j: [Cl("scope")] },
              Ia: {
                name: "setCustomParameters",
                j: [Pl("customOAuthParameters")],
              },
            }),
            Bl(lo, "credential", fo, [Hl(Cl(), Pl(), "token")]),
            Bl(To, "credentialWithLink", Eo, [Cl("email"), Cl("emailLink")]),
            Kl(po.prototype, {
              Aa: { name: "addScope", j: [Cl("scope")] },
              Ia: {
                name: "setCustomParameters",
                j: [Pl("customOAuthParameters")],
              },
            }),
            Bl(po, "credential", vo, [Hl(Cl(), Pl(), "token")]),
            Kl(mo.prototype, {
              Aa: { name: "addScope", j: [Cl("scope")] },
              Ia: {
                name: "setCustomParameters",
                j: [Pl("customOAuthParameters")],
              },
            }),
            Bl(mo, "credential", go, [
              Hl(Cl(), Hl(Pl(), Ml()), "idToken"),
              Hl(Cl(), Ml(), "accessToken", !0),
            ]),
            Kl(bo.prototype, {
              Ia: {
                name: "setCustomParameters",
                j: [Pl("customOAuthParameters")],
              },
            }),
            Bl(bo, "credential", yo, [
              Hl(Cl(), Pl(), "token"),
              Cl("secret", !0),
            ]),
            Kl(ho.prototype, {
              Aa: { name: "addScope", j: [Cl("scope")] },
              credential: {
                name: "credential",
                j: [
                  Hl(Cl(), Hl(Pl(), Ml()), "optionsOrIdToken"),
                  Hl(Cl(), Ml(), "accessToken", !0),
                ],
              },
              Ia: {
                name: "setCustomParameters",
                j: [Pl("customOAuthParameters")],
              },
            }),
            Kl(oo.prototype, { v: { name: "toJSON", j: [Cl(null, !0)] } }),
            Kl(no.prototype, { v: { name: "toJSON", j: [Cl(null, !0)] } }),
            Bl(_o, "credential", Oo, [
              Cl("verificationId"),
              Cl("verificationCode"),
            ]),
            Kl(_o.prototype, {
              cb: {
                name: "verifyPhoneNumber",
                j: [
                  Hl(
                    Cl(),
                    {
                      name: "phoneInfoOptions",
                      J: "valid phone info options",
                      optional: !1,
                      K: function (t) {
                        return (
                          !!t &&
                          (t.session && t.phoneNumber
                            ? Vl(t.session, Zr) &&
                              "string" == typeof t.phoneNumber
                            : t.session && t.multiFactorHint
                            ? Vl(t.session, Qr) && Fl(t.multiFactorHint)
                            : t.session && t.multiFactorUid
                            ? Vl(t.session, Qr) &&
                              "string" == typeof t.multiFactorUid
                            : !!t.phoneNumber &&
                              "string" == typeof t.phoneNumber)
                        )
                      },
                    },
                    "phoneInfoOptions"
                  ),
                  ql(),
                ],
              },
            }),
            Kl(ko.prototype, { v: { name: "toJSON", j: [Cl(null, !0)] } }),
            Kl(I.prototype, { toJSON: { name: "toJSON", j: [Cl(null, !0)] } }),
            Kl(Uo.prototype, { toJSON: { name: "toJSON", j: [Cl(null, !0)] } }),
            Kl(jo.prototype, { toJSON: { name: "toJSON", j: [Cl(null, !0)] } }),
            Kl(Wc.prototype, { toJSON: { name: "toJSON", j: [Cl(null, !0)] } }),
            Kl(Kc.prototype, { Pc: { name: "resolveSignIn", j: [jl()] } }),
            Kl(Zc.prototype, {
              Ob: { name: "getSession", j: [] },
              dc: { name: "enroll", j: [jl(), Cl("displayName", !0)] },
              $c: {
                name: "unenroll",
                j: [
                  Hl(
                    {
                      name: "multiFactorInfo",
                      J: "a valid multiFactorInfo",
                      optional: !1,
                      K: Fl,
                    },
                    Cl(),
                    "multiFactorInfoIdentifier"
                  ),
                ],
              },
            }),
            Kl(_l.prototype, {
              clear: { name: "clear", j: [] },
              render: { name: "render", j: [] },
              verify: { name: "verify", j: [] },
            }),
            Bl(fr, "parseLink", wr, [Cl("link")]),
            Bl(
              dl,
              "assertion",
              function (t) {
                return new zc(t)
              },
              [xl("phone")]
            ),
            (function () {
              if (
                void 0 === Xl ||
                !Xl.INTERNAL ||
                !Xl.INTERNAL.registerComponent
              )
                throw Error(
                  "Cannot find the firebase namespace; be sure to include firebase-app.js before this library."
                )
              var t = {
                ActionCodeInfo: {
                  Operation: {
                    EMAIL_SIGNIN: tr,
                    PASSWORD_RESET: "PASSWORD_RESET",
                    RECOVER_EMAIL: "RECOVER_EMAIL",
                    REVERT_SECOND_FACTOR_ADDITION: Qi,
                    VERIFY_AND_CHANGE_EMAIL: er,
                    VERIFY_EMAIL: "VERIFY_EMAIL",
                  },
                },
                Auth: Xh,
                AuthCredential: to,
                Error: I,
              }
              Bl(t, "EmailAuthProvider", To, []),
                Bl(t, "FacebookAuthProvider", lo, []),
                Bl(t, "GithubAuthProvider", po, []),
                Bl(t, "GoogleAuthProvider", mo, []),
                Bl(t, "TwitterAuthProvider", bo, []),
                Bl(t, "OAuthProvider", ho, [Cl("providerId")]),
                Bl(t, "SAMLAuthProvider", co, [Cl("providerId")]),
                Bl(t, "PhoneAuthProvider", _o, [
                  {
                    name: "auth",
                    J: "an instance of Firebase Auth",
                    optional: !0,
                    K: function (t) {
                      return !!(t && t instanceof Xh)
                    },
                  },
                ]),
                Bl(t, "RecaptchaVerifier", _l, [
                  Hl(
                    Cl(),
                    {
                      name: "",
                      J: "an HTML element",
                      optional: !1,
                      K: function (t) {
                        return !!(t && t instanceof Element)
                      },
                    },
                    "recaptchaContainer"
                  ),
                  Pl("recaptchaParameters", !0),
                  {
                    name: "app",
                    J: "an instance of Firebase App",
                    optional: !0,
                    K: function (t) {
                      return !!(t && t instanceof Xl.app.App)
                    },
                  },
                ]),
                Bl(t, "ActionCodeURL", fr, []),
                Bl(t, "PhoneMultiFactorGenerator", dl, []),
                Xl.INTERNAL.registerComponent({
                  name: "auth",
                  instanceFactory: function (t) {
                    return new Xh((t = t.getProvider("app").getImmediate()))
                  },
                  multipleInstances: !1,
                  serviceProps: t,
                  instantiationMode: "LAZY",
                  type: "PUBLIC",
                }),
                Xl.INTERNAL.registerComponent({
                  name: "auth-internal",
                  instanceFactory: function (t) {
                    return {
                      getUid: b(
                        (t = t.getProvider("auth").getImmediate()).getUid,
                        t
                      ),
                      getToken: b(t.kc, t),
                      addAuthTokenListener: b(t.bc, t),
                      removeAuthTokenListener: b(t.Nc, t),
                    }
                  },
                  multipleInstances: !1,
                  instantiationMode: "LAZY",
                  type: "PRIVATE",
                }),
                Xl.registerVersion("@firebase/auth", "0.14.6"),
                Xl.INTERNAL.extendNamespace({ User: uh })
            })()
        }.apply(
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        )
    }.apply(this, arguments))
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        "Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first."
      ))
    )
  }
})
//# sourceMappingURL=firebase-auth.js.map
