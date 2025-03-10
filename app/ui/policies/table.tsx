import Image from 'next/image';
import { UpdatePolicie, DeletePolicie } from '@/app/ui/policies/buttons';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils/utils';
import { fetchFilteredPolicies } from '@/app/lib/policies/data';
import { fetchCompanies } from '@/app/lib/companies/data';
export default async function PoliciesTable({ 
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const policies = await fetchFilteredPolicies(query, currentPage);
  const companies = await fetchCompanies();
  
  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {policies?.map((policie) =>  {
                  const company = companies.find((c) => c.id === policie.idcompany);
                  return(
                    <div
                      key={policie.id}
                      className="flex-row mb-6 w-full rounded-md bg-green-300 p-3"
                    >
                      <div>
                        <p className="text-xl">{policie.number}</p>
                        <p>{company?.name}</p>
                      </div>
                      <div className="flex justify-end gap-3 pt-2">
                          <UpdatePolicie id={policie.id} />
                          <DeletePolicie id={policie.id} />
                        </div>
                    </div>
                  )})}
                </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-3 py-5 font-medium">
                      NUMBER
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      COMPANY
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {policies.map((policie) => {
                    const company = companies.find((c) => c.id === policie.idcompany);
                    return (
                    <tr key={policie.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{policie.number}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {company ? company.name : 'Company não encontrada'}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdatePolicie id={policie.id} />
                          <DeletePolicie id={policie.id} />
                        </div>
                      </td>
                    </tr>
                  )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
