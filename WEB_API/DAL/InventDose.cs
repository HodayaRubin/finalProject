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
    
    public partial class InventDose
    {
        public Nullable<int> IdDose { get; set; }
        public Nullable<int> IdChef { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<int> IdTable { get; set; }
        public Nullable<System.TimeSpan> HourInvention { get; set; }
        public int Id { get; set; }
    
        public virtual CurrentEmployee CurrentEmployee { get; set; }
        public virtual CurrentEmployee CurrentEmployee1 { get; set; }
        public virtual Menu Menu { get; set; }
        public virtual StatusDose StatusDose { get; set; }
    }
}