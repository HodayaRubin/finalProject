//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class SpecialInvent
    {
        public int Id { get; set; }
        public string kindOfevent { get; set; }
        public string name { get; set; }
        public string phone { get; set; }
        public string mail { get; set; }
        public Nullable<System.DateTime> dateEvent { get; set; }
        public Nullable<int> CountOfPeople { get; set; }
        public Nullable<bool> isContact { get; set; }
    }
}
