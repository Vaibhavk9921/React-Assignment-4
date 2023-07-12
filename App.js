import { useState } from 'react';
import './App.css'
const App = () => {
    const [year, settime] = useState([""])
    const getGreeting = () => {
        const currenttime = new Date()
        const currenthour = currenttime.getHours()
        if (currenthour >= 5 && currenthour < 12) {
            return ('Good Morning, everyone');
        } else if (currenthour >= 12 && currenthour < 18) {
            return ('Good Afternoon, everyone');
        } else {
            return ('Good Evening, everyone');
        }
    }
    useState(() => {
        settime(getGreeting());
    }
    )
    return <h1>{year}</h1>
}
export default App;