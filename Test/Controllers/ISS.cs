using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Test.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ISSController : ControllerBase
    {
        const string URL = "http://api.open-notify.org/iss-now.json";


        private IHubContext<ChartHub> _hub;
        public ISSController(IHubContext<ChartHub> hub)
        {
            _hub = hub;
        }

        [HttpGet]
        [Route("GetNotes")]
        public IActionResult GetNotes()
        {
            var timerManager = new TimerManager(() =>
            _hub.Clients.All.SendAsync("transferchartdata", DataMgr.GetData()));
            return Ok(new { Message = "Request Completed" });
        }

        [HttpGet]
        public IssResult Get()
        {
            try
            {

                HttpClient http = new HttpClient();

                var result = http.GetAsync(URL)
                    .Result.Content.ReadAsStringAsync().Result;

                IssResult data = JsonSerializer.Deserialize<IssResult>(result);
                
                return data;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public List<IssResult> Post(IssResult userNote)
        {
            try
            {
                DataMgr.UserNotes.Add(userNote);
                return DataMgr.GetData();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
