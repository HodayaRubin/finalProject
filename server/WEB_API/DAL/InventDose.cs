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
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public InventDose()
        {
            this.InventDetails = new HashSet<InventDetails>();
        }
    
        public int Id { get; set; }
        public System.DateTime DateInvent { get; set; }
        public Nullable<int> IdEmployee { get; set; }
        public Nullable<int> IdStatus { get; set; }
        public Nullable<int> IdTable { get; set; }
        public System.TimeSpan HourInvention { get; set; }
        public int IdVisiter { get; set; }
    
        public virtual Employees Employees { get; set; }
        public virtual StatusDose StatusDose { get; set; }
        public virtual Tables Tables { get; set; }
        public virtual Visiters Visiters { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<InventDetails> InventDetails { get; set; }
    }
}
