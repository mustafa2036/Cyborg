import React from 'react'
import $ from 'jquery'

export default function Loading() {
    $(document).ready(()=> {
        $(".spinner").fadeOut(5000, () =>{
            $('#loading').fadeOut(2000, ()=>{
                $("body").css("overflow", 'auto');
            });
        })
    })
  return (
    <>
    <section id="loading">
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </section> 
    </>
  )
}
