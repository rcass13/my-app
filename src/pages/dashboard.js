import { titleList } from "../App";

export function Dashboard() {
    const marysInfo = [
        "Mary",
        "1:41 PM",
        "Hoffman Estates IL",
        "Virgo ♍︎",
        "Aquarius ♒︎	",
        "Sagittarius ♐︎",
        "Libra ♎︎",
        "Scorpio ♏︎",
        "Cancer  ♋︎",
        "Scorpio ♏︎",
        "Pisces ♓︎",
        "Capricorn ♑︎",
        "Capricorn ♑︎",
        "Scorpio ♏︎"
    ];
    return (
        <div>
            <table>
                {
                    marysInfo.map((element, index) => {
                        return (
                            <tr>
                                <td>{titleList[index]}</td>
                                <td>{element}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>);
}
