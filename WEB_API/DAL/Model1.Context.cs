﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class restaurantEntities : DbContext
    {
        public restaurantEntities()
            : base("name=restaurantEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<CurrentEmployee> CurrentEmployee { get; set; }
        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<EmployeesTypes> EmployeesTypes { get; set; }
        public virtual DbSet<InventDose> InventDose { get; set; }
        public virtual DbSet<Menu> Menu { get; set; }
        public virtual DbSet<StatusDose> StatusDose { get; set; }
        public virtual DbSet<Tables> Tables { get; set; }
        public virtual DbSet<VipTables> VipTables { get; set; }
        public virtual DbSet<Visiters> Visiters { get; set; }
    }
}