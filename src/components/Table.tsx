export default function Table(_props: any) {
  // Missing code

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Header 1
            </th>
            <th scope="col" className="px-6 py-3">
              Header 2
            </th>
            <th scope="col" className="px-6 py-3">
              Header 3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Data 1</td>
            <td className="px-6 py-4">Data 2</td>
            <td className="px-6 py-4">Data 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
