import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function BlogCard() {
    return (
        <div className='text-navy-blue shadow-md flex flex-col '>
            <Image src='/blog.png' width={300} height={200} className='rounded-lg' alt='blog pic' />
            <div className='flex gap-6 text-sm px-4 mt-2'>
                <p className='inline-flex items-center'>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.02667 0L11.3333 3.31333L10.38 4.25333L7.08 0.953333L8.02667 0V0ZM0 10.8533L4.33333 6.54C4.26667 6.33333 4.31333 6.07333 4.48667 5.9C4.74667 5.64 5.17333 5.64 5.43333 5.9C5.69333 6.16667 5.69333 6.58667 5.43333 6.84667C5.26 7.02 5 7.06667 4.79333 7L0.48 11.3333L7.55333 8.96667L9.90667 4.72667L6.61333 1.42667L2.36667 3.78L0 10.8533Z" fill="#FB2E86" />
                    </svg>
                    SaberAli
                </p>
                <p className='inline-flex items-center' >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.50008 8.7085C5.59073 8.7085 5.67935 8.68162 5.75472 8.63125C5.83009 8.58089 5.88884 8.50931 5.92353 8.42556C5.95822 8.34181 5.96729 8.24965 5.94961 8.16075C5.93192 8.07184 5.88827 7.99017 5.82417 7.92607C5.76007 7.86197 5.67841 7.81832 5.5895 7.80064C5.50059 7.78295 5.40843 7.79203 5.32468 7.82672C5.24094 7.86141 5.16935 7.92015 5.11899 7.99553C5.06863 8.0709 5.04175 8.15951 5.04175 8.25016C5.04175 8.37172 5.09004 8.4883 5.17599 8.57425C5.26195 8.66021 5.37852 8.7085 5.50008 8.7085ZM7.79175 8.7085C7.8824 8.7085 7.97101 8.68162 8.04638 8.63125C8.12176 8.58089 8.1805 8.50931 8.21519 8.42556C8.24988 8.34181 8.25896 8.24965 8.24127 8.16075C8.22359 8.07184 8.17994 7.99017 8.11584 7.92607C8.05174 7.86197 7.97007 7.81832 7.88117 7.80064C7.79226 7.78295 7.7001 7.79203 7.61635 7.82672C7.5326 7.86141 7.46102 7.92015 7.41066 7.99553C7.3603 8.0709 7.33342 8.15951 7.33342 8.25016C7.33342 8.37172 7.3817 8.4883 7.46766 8.57425C7.55361 8.66021 7.67019 8.7085 7.79175 8.7085ZM7.79175 6.87516C7.8824 6.87516 7.97101 6.84828 8.04638 6.79792C8.12176 6.74756 8.1805 6.67598 8.21519 6.59223C8.24988 6.50848 8.25896 6.41632 8.24127 6.32741C8.22359 6.2385 8.17994 6.15684 8.11584 6.09274C8.05174 6.02864 7.97007 5.98499 7.88117 5.9673C7.79226 5.94962 7.7001 5.95869 7.61635 5.99338C7.5326 6.02807 7.46102 6.08682 7.41066 6.16219C7.3603 6.23757 7.33342 6.32618 7.33342 6.41683C7.33342 6.53839 7.3817 6.65497 7.46766 6.74092C7.55361 6.82687 7.67019 6.87516 7.79175 6.87516ZM5.50008 6.87516C5.59073 6.87516 5.67935 6.84828 5.75472 6.79792C5.83009 6.74756 5.88884 6.67598 5.92353 6.59223C5.95822 6.50848 5.96729 6.41632 5.94961 6.32741C5.93192 6.2385 5.88827 6.15684 5.82417 6.09274C5.76007 6.02864 5.67841 5.98499 5.5895 5.9673C5.50059 5.94962 5.40843 5.95869 5.32468 5.99338C5.24094 6.02807 5.16935 6.08682 5.11899 6.16219C5.06863 6.23757 5.04175 6.32618 5.04175 6.41683C5.04175 6.53839 5.09004 6.65497 5.17599 6.74092C5.26195 6.82687 5.37852 6.87516 5.50008 6.87516ZM8.70842 1.37516H8.25008V0.916829C8.25008 0.795272 8.20179 0.678693 8.11584 0.592739C8.02988 0.506785 7.91331 0.458496 7.79175 0.458496C7.67019 0.458496 7.55361 0.506785 7.46766 0.592739C7.3817 0.678693 7.33342 0.795272 7.33342 0.916829V1.37516H3.66675V0.916829C3.66675 0.795272 3.61846 0.678693 3.53251 0.592739C3.44655 0.506785 3.32997 0.458496 3.20841 0.458496C3.08686 0.458496 2.97028 0.506785 2.88432 0.592739C2.79837 0.678693 2.75008 0.795272 2.75008 0.916829V1.37516H2.29175C1.92708 1.37516 1.57734 1.52003 1.31948 1.77789C1.06161 2.03575 0.916748 2.38549 0.916748 2.75016V9.16683C0.916748 9.5315 1.06161 9.88124 1.31948 10.1391C1.57734 10.397 1.92708 10.5418 2.29175 10.5418H8.70842C9.07309 10.5418 9.42282 10.397 9.68069 10.1391C9.93855 9.88124 10.0834 9.5315 10.0834 9.16683V2.75016C10.0834 2.38549 9.93855 2.03575 9.68069 1.77789C9.42282 1.52003 9.07309 1.37516 8.70842 1.37516ZM9.16675 9.16683C9.16675 9.28839 9.11846 9.40497 9.03251 9.49092C8.94655 9.57687 8.82997 9.62516 8.70842 9.62516H2.29175C2.17019 9.62516 2.05361 9.57687 1.96766 9.49092C1.8817 9.40497 1.83341 9.28839 1.83341 9.16683V5.04183H9.16675V9.16683ZM9.16675 4.12516H1.83341V2.75016C1.83341 2.62861 1.8817 2.51203 1.96766 2.42607C2.05361 2.34012 2.17019 2.29183 2.29175 2.29183H2.75008V2.75016C2.75008 2.87172 2.79837 2.9883 2.88432 3.07425C2.97028 3.16021 3.08686 3.2085 3.20841 3.2085C3.32997 3.2085 3.44655 3.16021 3.53251 3.07425C3.61846 2.9883 3.66675 2.87172 3.66675 2.75016V2.29183H7.33342V2.75016C7.33342 2.87172 7.3817 2.9883 7.46766 3.07425C7.55361 3.16021 7.67019 3.2085 7.79175 3.2085C7.91331 3.2085 8.02988 3.16021 8.11584 3.07425C8.20179 2.9883 8.25008 2.87172 8.25008 2.75016V2.29183H8.70842C8.82997 2.29183 8.94655 2.34012 9.03251 2.42607C9.11846 2.51203 9.16675 2.62861 9.16675 2.75016V4.12516ZM3.20841 6.87516C3.29906 6.87516 3.38768 6.84828 3.46305 6.79792C3.53842 6.74756 3.59717 6.67598 3.63186 6.59223C3.66655 6.50848 3.67563 6.41632 3.65794 6.32741C3.64026 6.2385 3.5966 6.15684 3.53251 6.09274C3.46841 6.02864 3.38674 5.98499 3.29783 5.9673C3.20892 5.94962 3.11677 5.95869 3.03302 5.99338C2.94927 6.02807 2.87769 6.08682 2.82732 6.16219C2.77696 6.23757 2.75008 6.32618 2.75008 6.41683C2.75008 6.53839 2.79837 6.65497 2.88432 6.74092C2.97028 6.82687 3.08686 6.87516 3.20841 6.87516ZM3.20841 8.7085C3.29906 8.7085 3.38768 8.68162 3.46305 8.63125C3.53842 8.58089 3.59717 8.50931 3.63186 8.42556C3.66655 8.34181 3.67563 8.24965 3.65794 8.16075C3.64026 8.07184 3.5966 7.99017 3.53251 7.92607C3.46841 7.86197 3.38674 7.81832 3.29783 7.80064C3.20892 7.78295 3.11677 7.79203 3.03302 7.82672C2.94927 7.86141 2.87769 7.92015 2.82732 7.99553C2.77696 8.0709 2.75008 8.15951 2.75008 8.25016C2.75008 8.37172 2.79837 8.4883 2.88432 8.57425C2.97028 8.66021 3.08686 8.7085 3.20841 8.7085Z" fill="#FFA454" />
                    </svg>
                    21 August 2022
                </p>
            </div>
            <div className='px-4 pb-7'>
                <h1 className='font-bold mt-2 hover:text-pink transition'>Top esssential Trends in 2021</h1>
                <p className='storm-grey my-2'>More off this less hello samlande lied much
                    over tightly circa horse taped mightly</p>
                <Link href='/'>
                    <a className='border-b border-navy-blue hover:text-pink hover:border-pink transition'>Read More</a>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard;