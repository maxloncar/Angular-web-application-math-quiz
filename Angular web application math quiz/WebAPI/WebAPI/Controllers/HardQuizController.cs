using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class HardQuizController : ApiController
    {
        [HttpGet]
        [Route("api/HardQuestions")]
        public HttpResponseMessage GetHardQuestions()
        {
            using (DBModel db = new DBModel())
            {
                var hQns = db.HardQuestions
                    .Select(x => new { hardQnID = x.hQnID, hardQn = x.hQn, hardImageName = x.hImageName, x.hOption1, x.hOption2, x.hOption3, x.hOption4 })
                    .OrderBy(y => Guid.NewGuid())
                    .Take(10)
                    .ToArray();
                var updated = hQns.AsEnumerable()
                    .Select(x => new
                    {
                        hQnID = x.hardQnID,
                        hQn = x.hardQn,
                        hImageName = x.hardImageName,
                        Options = new string[] { x.hOption1, x.hOption2, x.hOption3, x.hOption4 }
                    }).ToList();
                return this.Request.CreateResponse(HttpStatusCode.OK, updated);
            }
        }

        [HttpPost]
        [Route("api/HardAnswers")]
        public HttpResponseMessage GetHardAnswers(int[] hqIDs)
        {
            using (DBModel db = new DBModel())
            {
                var result = db.HardQuestions
                    .AsEnumerable()
                    .Where(y => hqIDs.Contains(y.hQnID))
                    .OrderBy(x => { return Array.IndexOf(hqIDs, x.hQnID); })
                    .Select(z => z.hAnswer)
                    .ToArray();
                return this.Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }
    }
}
