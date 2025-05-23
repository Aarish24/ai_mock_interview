import React from 'react'
import Image from "next/image";
import {cn} from "@/lib/utils";

enum CallStatus{

    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}

const Agent = ({userName}:AgentProps) => {
    const callStatus = CallStatus.INACTIVE;
    const isSpeaking = true;
    const messages=[
        'Hello, I am your AI interviewer. How are you today?',
        'I am a professional job interviewer conducting a real-time voice interview with a candidate.',
        'Your goal is to assess their qualifications, motivation, and fit for the role.',
        'Interview Guidelines:',
        'Follow the structured question flow:',
        '1. Introduction',
        '2. Technical Knowledge',
        '3. Communication Skills',
        '4. Problem Solving',
        '5. Cultural & Role Fit',
        '6. Confidence & Clarity',
        '7. Conclusion',
        'Thank you for your time, and I look forward to your interview.',
    ]
    const lastMessage = messages[messages.length-1];

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image src="/ai-avatar.png" alt="vapi" height={54} width={65} className="object-cover"/>
                        {isSpeaking && <span className="animate-speak"/>}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>

                <div className="card-border">
                    <div className="card-content">
                        <Image src="/user-avatar.png" alt="vapi" height={540} width={540} className="object-cover rounded-full size-[120px]"/>
                        <h3>{userName}</h3>
                    </div>

                </div>
            </div>

            {messages.length>0 &&(
                <div className="transcript-border">
                    <div className="transcript">
                        <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0','animate-fade-in opacity-100')}>
                            {lastMessage}</p>
                    </div>
                </div>
            )}

            <div className="w-full justify-center flex">
                {callStatus !== 'ACTIVE'?(
                    <button className="relative btn-call">
                        <span className={cn('absolute animate-ping rounded-full opacity-75',CallStatus!=='CONNECTING' & 'hidden')}/>

                        <span>
                            {callStatus=='INACTIVE' || callStatus=='FINISHED'? 'call':'....'}
                        </span>

                    </button>
                ):(
                    <button className="btn-disconnect">
                        End
                    </button>
                )}
            </div>
        </>

    )
}
export default Agent
