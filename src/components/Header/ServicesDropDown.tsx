import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface Service {
  path: string;
  label: string;
}

interface ServicesDropDownProps {
  setIsServicesDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const services: Service[] = [
  { path: "/mobile-app-development", label: "Mobile App Development" },
  { path: "/web-development", label: "Website Development" },
  { path: "/ui-ux", label: "UI & UX" },
  { path: "/internet-of-things", label: "Internet of Things" },
  { path: "/qa", label: "QA" },
];

const ServicesDropDown: React.FC<ServicesDropDownProps> = ({
  setIsServicesDropdownOpen,
}) => {
  const router = useRouter();
  const location = usePathname();

  const handleServiceClick = (path: string) => {
    setIsServicesDropdownOpen(false);
    router.push(path);
  };

  return (
    <div className="py-2">
      {services?.map((service) => (
        <div
          key={service.path}
          className={`px-4 py-2 ${
            location === service.path ? "text-[#399EFD]" : "text-[#121212]"
          } font-light text-[14px] whitespace-nowrap cursor-pointer hover:bg-gray-100`}
          onClick={() => handleServiceClick(service.path)}
        >
          {service.label}
        </div>
      ))}
    </div>
  );
};

export default React.memo(ServicesDropDown);
