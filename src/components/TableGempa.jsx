import React, { useEffect, useState } from "react";
import { AmbilDataGempa } from "../API/fetchApi";
import TitleSectionComponent from "./TitleSection"

export default function TableComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    AmbilDataGempa()
      .then(
        (data) => (
          setData(data.data.gempa),
          console.log(data.data.gempa)
        )
      )
      .catch((err) => err);
  }, []);

  return (
    <section>
      <TitleSectionComponent title="Daftar Gempa Terkini"/>
      <div className="flex flex-col md:w-9/12 w-full mx-auto">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Magnitudo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Wilayah
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Waktu
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Kedalaman
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((gempa, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {gempa.magnitudo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {gempa.wilayah}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {gempa.waktu_gempa}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {gempa.kedalaman}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
