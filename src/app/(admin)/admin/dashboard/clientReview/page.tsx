"use client";
import DialogueComp from "@/components/Admin/DialogueComp";
import EntriesSelector from "@/components/Admin/EntriesSelector";
import Pagination from "@/components/Admin/Pagination";
import SearchBar from "@/components/Admin/SearchBar";
import TableLayoutBox from "@/components/Admin/TableLayoutBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";
import AddClientReviewForm from "./AddClientReviewForm";
import axios from "axios";
import Image from "next/image";

const ClientReview = () => {
  const navigate = useRouter();

  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 0;

  const [open, setOpen] = useState(false);
  const [clientData, setClientData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiCalled = useRef<boolean>(false); // Ref to track if API has been called

  const handleEntriesChange = (event: any) => {
    setEntries(event.target.value);
    setCurrentPage(1);
  };

  const handleSearch = (term: any) => {
    setSearchTerm(term);
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleGetClient = async () => {
    if (apiCalled.current) return; // Prevent duplicate calls
    apiCalled.current = true; // Mark as called

    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/our_client`
      );
      if (res?.data?.statusCode === 200) {
        setLoading(false);
        setClientData(res?.data?.data);
      } else {
        console.log(res?.data?.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetClient();
  }, []);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Client Review</h1>
      </div>
      <div className="flex justify-between md:items-center mb-4 max-md:flex-col">
        <div className="flex items-center space-x-2 max-md:mb-4">
          <span className="text-gray-700">Show</span>
          <EntriesSelector
            entries={entries}
            handleChange={handleEntriesChange}
          />
          <span className="text-gray-700">Entries</span>
        </div>

        <div className="flex gap-5 justify-between items-center flex-wrap">
          <SearchBar onSearch={handleSearch} />
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
              padding: "13px 25px",
              borderRadius: "25px",
              fontSize: { xs: "12px", sm: "13px" },
            }}
            onClick={() => setOpen(true)}
          >
            Add Client Review
          </Button>
        </div>
      </div>

      <TableLayoutBox>
        <table className="w-full bg-white rounded-[8px]">
          <thead className="bg-[#F6F6F6] border border-[#F6F6F6]">
            <tr>
              <th className="py-[15px] px-4 text-[#454545] font-medium">
                Image
              </th>
              <th className="py-[15px] px-4 text-[#454545] font-medium">
                Name
              </th>
              <th className="py-[15px] px-4 text-[#454545] font-medium">
                Description
              </th>
              <th className="py-2 px-4 text-[#454545] font-medium">
                Designation
              </th>
              <th className="py-2 px-4 text-[#454545] font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="border">
            {clientData?.map((item: any, index: number) => {
              return (
                <tr key={index} className="text-center">
                  <td className="flex justify-center">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${item?.image}`}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>{item?.name}</td>
                  <td className="w-[50%]">{item?.description}</td>
                  <td>{item?.designation}</td>
                  <td className="py-2 px-4 text-center">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <EditIcon className="cursor-pointer text-blue-800" />
                      <DeleteIcon className="cursor-pointer text-red-500" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableLayoutBox>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <DialogueComp open={open}>
        <AddClientReviewForm setOpen={setOpen} />
      </DialogueComp>
    </div>
  );
};

export default ClientReview;
