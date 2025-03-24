"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="bg-codaPurple py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg sm:text-xl font-bold text-white">CODASHOP 台灣</h3>
              <p className="text-xs sm:text-sm text-gray-300">
                為什麼選擇 Codashop 充值服務？<br />
                如今有許多地方可以選擇 Codashop, 為什麼選擇我們？我們有多款遊戲跟服務供您選擇，而且交易安全有保障，在充值後立刻就會拿到您的遊戲幣！
              </p>
            </div>
            <div>
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">簡單方便的充值</h4>
                  <p className="text-xs sm:text-sm text-gray-300">在 Codashop 上充值既簡單又快捷。</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">安全可靠</h4>
                  <p className="text-xs sm:text-sm text-gray-300">在 Codashop 上支付安全無憂，交易保證有保障。</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">優惠的價格</h4>
                  <p className="text-xs sm:text-sm text-gray-300">在 Codashop, 您可以用優惠的價格獲得最多的遊戲點數。</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">客戶支援</h4>
                  <p className="text-xs sm:text-sm text-gray-300">對於 Codashop 有疑問? 我們隨時提供幫助。</p>
                  <a href="/support" className="text-xs sm:text-sm text-primary underline">聯絡我們 →</a>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <h3 className="mb-4 text-lg sm:text-xl font-bold text-white">公司資訊</h3>
              <p className="mb-2 text-xs sm:text-sm text-gray-300">客戶服務</p>
              <p className="mb-4 text-xs sm:text-sm text-gray-300">電子郵件: support@codashop.tw</p>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="text-white hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </Link>
                <Link href="https://twitter.com" className="text-white hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="text-white hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom yellow bar */}
      <div className="bg-footerYellow py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <select className="rounded border border-gray-400 bg-white px-2 py-1 text-xs sm:text-sm">
                <option value="zh-tw">正體中文 (Taiwan)</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
              <Link href="/about" className="mx-1 hover:underline">關於我們</Link>
              <Link href="/terms" className="mx-1 hover:underline">服務條款</Link>
              <Link href="/privacy" className="mx-1 hover:underline">隱私政策</Link>
              <Link href="/cookies" className="mx-1 hover:underline">Cookie 政策</Link>
              <Link href="/contact" className="mx-1 hover:underline">聯絡我們</Link>
              <span className="mx-1">© Copyright Coda Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
