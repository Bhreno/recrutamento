const TabelaPadrao = ({data, columns}) => {
    return(
        <table className="table-fixed border-collapse border border-primary-500 w-full">
            <thead>
                <tr>
                    {columns.map((item) => {
                        return(
                            <th key={item.name} 
                            className={`py-2 ${item.width} font-normal border border-primary-500 truncate`}>
                                {item.name}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
            {data.map((item) => {
                return(
                    <tr className="border border-primary-500" key={item.id}>
                        {columns.map((localItem) => {
                            return(
                                <td className={`px-2 py-2 text-xs border border-primary-500 
                                ${localItem?.textwrap||"break-all"}`} key={localItem.selector}>
                                    {item[localItem.selector]}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}   
export default TabelaPadrao;