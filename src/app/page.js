
'use client'
import { useState } from 'react'; 
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Inbox from "@/components/Inbox/Inbox";
import MailReader from "@/components/MailReader/MailReader";


const MOCK_MAILS = [
    { id: "10010025", type: "Queja", subject: "Queja generalizada", sender: "Antonio Antoniez", receivedDate: "08/09/2025", fullContent: "Por medio de la presente, los aprendices de la ficha 9121043 queremos expresar nuestra inconformidad...", hasAttachment: true },
    { id: "10010026", type: "Pregunta", subject: "Duda sobre proceso", sender: "Maria Gómez", receivedDate: "07/09/2025", fullContent: "Quisiera saber cuál es el proceso correcto para...", hasAttachment: false },
];


export default function Home() {
    const [selectedMailId, setSelectedMailId] = useState(null);

    
    const handleSelectMail = (id) => setSelectedMailId(id);
    const handleDeselectMail = () => setSelectedMailId(null);
    
   
    const selectedMail = MOCK_MAILS.find(mail => mail.id === selectedMailId);

    
    const isInboxVisible = selectedMailId === null;
    
    
    const containerWidthClass = "w-[calc(100vw-50px)]";

    return (
        <div className="bg-senaGray">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className={`flex h-[calc(100vh-90px-2.5rem)] ${containerWidthClass} bg-transparent m-5 rounded-lg`}> 
                    
               
                    {isInboxVisible && (
                        <Inbox 
                            mails={MOCK_MAILS} 
                            onSelectMail={handleSelectMail} 
                        />
                    )}

                   
                    {!isInboxVisible && selectedMail && ( 
                        <MailReader 
                            selectedMail={selectedMail} 
                            onDeselectMail={handleDeselectMail} 
                        />
                    )}
                    

                </div>
            </div>
        </div>
    );
}