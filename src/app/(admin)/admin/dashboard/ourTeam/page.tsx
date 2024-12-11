"use client";
import useDebounce from "@/common/useDebounce";
import DialogueComp from "@/components/Admin/DialogueComp";
import EntriesSelector from "@/components/Admin/EntriesSelector";
import Pagination from "@/components/Admin/Pagination";
import SearchBar from "@/components/Admin/SearchBar";
import TableLayoutBox from "@/components/Admin/TableLayoutBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AddTeamForm from "./AddTeamForm";
import DeleteModelBody from "@/common/DeleteModelBody";
import NoDataFound from "@/common/noDataFound";
import axiosInstance from "@/service/axiosInstance";

const OurTeamPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [teamData, setTeamData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  const [isEditData, setIsEditData] = useState({});
  const [delMolOpen, setDelMolOpen] = useState(false);
  const [delId, setDelID] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleEntriesChange = (event: any) => {
    setRecordPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handleSearch = (term: any) => {
    setSearchTerm(term);
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/team?id=${delId}`
      );
      if (res?.data?.status === 200) {
        handleGetTeam();
        setDelMolOpen(false);
      } else {
        console.log(res?.data?.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDelMolOpen(false);
    }
  };

  const handleGetTeam = async () => {
    const searchValue = debouncedSearchTerm
      ? JSON.stringify({ search: debouncedSearchTerm })
      : "";
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASEURL}/team?pageNumber=${currentPage}&recordsPerPage=${recordPerPage}&search=${searchValue}`
      );
      if (res?.data?.status === 200) {
        setLoading(false);
        setTeamData(res?.data?.payload?.data);
        setTotalRecords(res?.data?.pager?.totalRecords);
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
    handleGetTeam();
  }, [currentPage, recordPerPage, debouncedSearchTerm]);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Team</h1>
      </div>
      <div className="flex justify-between md:items-center mb-4 max-md:flex-col">
        <div className="flex items-center space-x-2 max-md:mb-4">
          <span className="text-gray-700">Show</span>
          <EntriesSelector
            entries={recordPerPage}
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
            onClick={() => {
              setIsEditData({});
              setOpen(true);
            }}
          >
            Add Team
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
              <th className="py-2 px-4 text-[#454545] font-medium">
                Designation
              </th>
              <th className="py-2 px-4 text-[#454545] font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="border">
            {teamData?.length > 0 ? (
              teamData?.map((item: any, index: number) => {
                return (
                  <tr key={index} className="text-center">
                    <td className="flex justify-center py-2">
                      <div className="border border-black w-[80px] h-[80px] flex justify-center items-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_BASEURL_IMAGE}/${item?.image}`}
                          className="object-cover max-w-[80px] max-h-[80px]"
                          alt=""
                        />
                      </div>
                    </td>
                    <td>{item?.name}</td>
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
                        <div
                          onClick={() => {
                            setOpen(true);
                            setIsEditData(item);
                          }}
                        >
                          <EditIcon className="cursor-pointer text-blue-800" />
                        </div>
                        <div
                          onClick={() => {
                            setDelID(item?.uuid);
                            setDelMolOpen(true);
                          }}
                          className=""
                        >
                          <DeleteIcon className="cursor-pointer text-red-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <NoDataFound loading={loading} />
            )}
            {}
          </tbody>
        </table>
      </TableLayoutBox>

      <Pagination
        currentPage={currentPage}
        totalRecords={totalRecords}
        entries={recordPerPage}
        onPageChange={handlePageChange}
      />

      <DialogueComp open={open}>
        <AddTeamForm
          setOpen={setOpen}
          handleGetTeam={handleGetTeam}
          isEditData={isEditData}
        />
      </DialogueComp>

      <DialogueComp open={delMolOpen}>
        <DeleteModelBody
          setOpen={setDelMolOpen}
          handleDelete={handleDelete}
          label={"Team Member"}
        />
      </DialogueComp>
    </div>
  );
};

export default OurTeamPage;
