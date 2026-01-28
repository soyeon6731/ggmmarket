import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🍠</span>
            <span className="text-lg font-bold text-orange-500">고구마마켓</span>
          </Link>

          {/* 검색 */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="물품이나 동네를 검색해보세요"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* 버튼 */}
          <div className="flex items-center gap-2">
            <button className="sm:hidden p-2">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
              글쓰기
            </button>
          </div>
        </div>

        {/* 동네 선택 */}
        <div className="flex items-center gap-1 py-2 text-sm">
          <button className="flex items-center gap-1 font-medium text-gray-900">
            <span>서초구 반포동</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
