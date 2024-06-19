import { X } from "lucide-react";
import React from "react";

type Props = {
  onClose: () => void;
};
export default function AuthModal({ onClose }: Readonly<Props>) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="sm:w-5/12 w-full  bg-white p-4 rounded">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Login</h2>
          <X size={12} className="cursor-pointer" onClick={onClose} />
        </div>

        {/* Add  login form here */}
      </div>
    </div>
  );
}
