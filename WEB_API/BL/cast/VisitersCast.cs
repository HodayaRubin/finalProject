﻿using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.cast
{
    class VisitersCast
    {
        //one to dto
        public static VisitersDTO ToDTO(Visiters item)
        {
            return new VisitersDTO()
            {
                ld = item.ld,
                FirstName = item.FirstName,
                LastName = item.LastName,
                Phone = item.Phone,
                Address = item.Address,
                IdTable = item.IdTable,
                Mail = item.Mail,
                Passowored = item.Passowored,
                NameUser = item.NameUser,
                IdVisiter = item.IdVisiter,
            };
        }

        //list to dto
        public static List<VisitersDTO> ListToDTO(List<Visiters> list)
        {
            return list.Select(x => ToDTO(x)).ToList();
        }
        //one to dal
        public static Visiters ToDAL(VisitersDTO item)
        {
            return new Visiters()
            {
                ld = item.ld,
                FirstName = item.FirstName,
                LastName = item.LastName,
                Phone = item.Phone,
                Address = item.Address,
                IdTable = item.IdTable,
                Mail = item.Mail,
                Passowored = item.Passowored,
                NameUser = item.NameUser,
                IdVisiter = item.IdVisiter,
            };
        }
        //list to dal
        public static List<Visiters> ListToDAL(List<VisitersDTO> list)
        {
            return list.Select(x => ToDAL(x)).ToList();
        }
    }
}