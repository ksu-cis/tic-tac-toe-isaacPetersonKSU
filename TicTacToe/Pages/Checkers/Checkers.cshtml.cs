﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TicTacToe.Pages.Checkers
{
    public class CheckersModel : PageModel
    {
        public void OnGet()
        {
            if(@Model.Game.Board[x,y] != null)
            {
                //<div
            }
        }
    }
}