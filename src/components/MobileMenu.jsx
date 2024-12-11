import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

export function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-x-0 top-[60px] bottom-0 transform h-[90vh] overflow-auto ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out z-[998]`}
    >
      <nav className="flex flex-col px-[16px] pt-[16px] bg-[#004d71] text-white text-[18px] font-[500]">
        <Link
          onClick={onClose}
          to="/"
          className="py-4 border-b border-[#D9E5EA] hover:underline"
        >
          Quick search
        </Link>
        <Link
          onClick={onClose}
          to="/"
          className="py-4 border-b border-[#D9E5EA] hover:underline"
        >
          Advanced search
        </Link>
        <Link onClick={onClose} to="/" className="py-4 hover:underline">
          My shortlist
        </Link>
      </nav>
      <nav className="flex flex-col px-[16px] pb-5 bg-[#F3EED9] text-[#574840] text-[14px] font-[500]">
        <Link onClick={onClose} to="/" className="py-4 hover:underline">
          Home
        </Link>
        <Link onClick={onClose} to="/" className="py-4 hover:underline">
          About
        </Link>
        <Link onClick={onClose} to="/" className="py-4 hover:underline">
          Help
        </Link>
        <Link
          onClick={onClose}
          to="/"
          className="py-4 flex w-full justify-between items-center hover:underline"
        >
          Feedback
          <RxExternalLink strokeWidth={0.5} className="w-[18px] h-[18px]" />
        </Link>
        <Link
          onClick={onClose}
          to="/"
          className="py-4 flex w-full justify-between items-center hover:underline"
        >
          Legal
          <RxExternalLink strokeWidth={0.5} className="w-[18px] h-[18px]" />
        </Link>
        <Link onClick={onClose} to="/" className="py-4 hover:underline">
          Cookies
        </Link>
        <Link
          onClick={onClose}
          to="/"
          className="py-4 flex w-full justify-between items-center hover:underline"
        >
          Privacy
          <RxExternalLink strokeWidth={0.5} className="w-[18px] h-[18px]" />
        </Link>
        <Link
          onClick={onClose}
          to="/"
          className="py-4 flex w-full justify-between items-center hover:underline"
        >
          Go to The Law Society
          <RxExternalLink strokeWidth={0.5} className="w-[18px] h-[18px]" />
        </Link>
      </nav>
    </div>
  );
}
