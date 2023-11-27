
import React from "react"

const Services = () => {

    return (
        <>
            <div id="services" className="py-5" style={{ backgroundColor: '#fafafae8' }}>
                <div className="container pt-5">
                    {/* <div className="sec-ttitle">
                        <h2 className="text-center">Our Service</h2>
                        <p className="col-lg-7 col-md-8 mt-3 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam doloremque nihil expedita eum omnis aliquam, delectus ab corporis ipsa incidunt rerum vero </p>
                    </div> */}

                    <div className="row justify-content-center pb-5  home-ser" style={{ rowGap: '30px', columnGap: '25px', borderBottom: '1px solid #e7e7e7' }}>
                        <div className="col-lg-6 col-md-6 text-center">
                            <img src="https://img.freepik.com/premium-photo/close-up-copier_101448-2405.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" alt="" className="w-100 ser-sec-leftcard-img mx-auto" />
                        </div>
                        <div className="col-md-5 col-sm-10">
                            <h3>Customer Support Hotline</h3>
                            <p className="mt-4">
                                For official support for your Epson printer, visit Epson's official support website. There, you can find drivers, manuals, troubleshooting guides, and access resources to optimize your printer's performance. The website offers a user-friendly interface to help resolve issues and provide the latest updates for your specific Epson printer model.</p>

                            <p className="pb-2"> For Epson printer support, visit their official website for drivers, manuals, and troubleshooting guides, ensuring optimal performance and issue resolution.</p>
                            <a className="btn-loc" href="/about">Contact Us</a>
                        </div>
                    </div>

                    <div className="row my-5 pb-5 justify-content-center inner-row  home-ser" style={{ rowGap: '30px', columnGap: '25px', borderBottom: '1px solid #e7e7e7' }}>
                        <div className="col-md-5 col-sm-10">
                            <h3>Authorized Service Centers</h3>
                            <p className="mt-4">
                                Locate authorized Epson printer service centers for expert repairs and maintenance. These centers offer certified technicians, genuine parts, and reliable service to ensure your Epson printer operates at its best.</p>

                            <p className="pb-2"> Find certified Epson printer service centers for expert repairs and maintenance. These centers provide genuine parts and skilled technicians, ensuring reliable and top-quality service for your Epson printer.</p>
                            <a className="btn-loc" href="/about">Contact Us</a>
                        </div>
                        <div className="col-lg-6 col-md-6 text-center">
                            <img src="https://img.freepik.com/free-psd/isolated-toner-printer_23-2150755715.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" alt="" className="w-100 mx-auto ser-sec-leftcard-img" />
                        </div>
                    </div>

                    <div className="row justify-content-center pb-5  home-ser" style={{ rowGap: '30px', columnGap: '25px', borderBottom: '1px solid #e7e7e7' }}>
                        <div className="col-lg-6 col-md-6 text-center">
                            <img src="https://img.freepik.com/premium-photo/there-is-printer-sitting-desk-office-generative-ai_958078-19464.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100 mx-auto ser-sec-leftcard-img" />
                        </div>
                        <div className="col-md-5 col-sm-10">
                            <h3>Online Chat Support</h3>
                            <p className="mt-4">   Access Epson's online chat support for real-time assistance with your printer. Skilled representatives can help troubleshoot issues, provide guidance on setup, and offer solutions to ensure optimal performance for your Epson printer.</p>

                            <p className="pb-2">Connect with Epson's online chat support for real-time assistance, addressing printer issues and ensuring optimal performance with expert guidance.</p>
                            <a className="btn-loc" href="/about">Contact Us</a>
                        </div>
                    </div>

                    <div className="row my-5 pb-5 justify-content-center inner-row  home-ser" style={{ rowGap: '30px', columnGap: '25px', borderBottom: '1px solid #e7e7e7' }}>
                        <div className="col-md-5 col-sm-10">
                            <h3>Email Support</h3>
                            <p className="mt-4">For Epson printer support, reach out via email to receive assistance with troubleshooting, technical issues, and product inquiries. Provide details about your printer model and concerns for a prompt and personalized response from Epson's customer support team, ensuring a smooth resolution to your queries.</p>

                            <p className="pb-2">Contact Epson's email support for assistance with printer troubleshooting, technical issues, and product inquiries, ensuring prompt and personalized responses.</p>
                            <a className="btn-loc" href="/about">Contact Us</a>
                        </div>
                        <div className="col-lg-6 col-md-6 text-center">
                            <img src="https://img.freepik.com/premium-photo/technician-hand-open-cover-photocopier-photocopy-fix-paper-jam-replace-ink-cartridges-scanning-fax-copy-document-office-workplace_619210-451.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" alt="" className="w-100 mx-auto ser-sec-leftcard-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services