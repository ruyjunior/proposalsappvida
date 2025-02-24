import Image from 'next/image';
import { UpdatePlan, DeletePlan } from '@/app/ui/plans/buttons';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils/utils';
import { fetchFilteredPlans } from '@/app/lib/plans/data';
import { fetchPolicies } from '@/app/lib/policies/data';
export default async function PlansTable({ 
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const plans = await fetchFilteredPlans(query, currentPage);
  const policies = await fetchPolicies();
  
  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {plans?.map((plan) => {
                    const policie = policies.find((c) => c.id === plan.idpolicie);
                    return(
                    <div
                      key={plan.id}
                      className="flex-row mb-6 w-full rounded-md bg-green-300 p-3"
                    >
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="text-sm text-gray-500">Policy: {policie?.number}</p>
                          <p className="text-sm text-gray-500">Plano: {plan.number}</p>
                          <p className="text-sm text-gray-500">Death Value: {formatCurrency(plan.valuedeath)}</p>
                        </div>
                      </div>
                      <div className="flex justify-end gap-3 pt-2">
                          <UpdatePlan id={plan.id} />
                          <DeletePlan id={plan.id} />
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
                      VALUE DEATH
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      POLICIE
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {plans.map((plan) => {
                    const policie = policies.find((c) => c.id === plan.idpolicie);
                    return (
                    <tr key={plan.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{plan.number}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{plan.valuedeath}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {policie ? policie.number : 'Policie não encontrada'}
                      </td>

                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdatePlan id={plan.id} />
                          <DeletePlan id={plan.id} />
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
