using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_GamePay.Controllers
{
    public class BaseController : Controller
    {
        protected IRechargeChannelsService _manageService;
        public BaseController(
            IRechargeChannelsService manageService
            )
        {
            _manageService = manageService;
        }
        public BaseController() { }

    }
}