using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class EasyQuizController : ApiController
    {
        [HttpGet]
        [Route("api/EasyQuestions")]
        public HttpResponseMessage GetEasyQuestions()
        {
            using (DBModel db = new DBModel())
            {
                var eQns = db.EasyQuestions
                    .Select(x => new { easyQnID = x.eQnID, easyQn = x.eQn, easyImageName = x.eImageName, x.eOption1, x.eOption2, x.eOption3, x.eOption4 })
                    .OrderBy(y => Guid.NewGuid())
                    .Take(10)
                    .ToArray();
                var updated = eQns.AsEnumerable()
                    .Select(x => new
                    {
                        eQnID = x.easyQnID,
                        eQn = x.easyQn,
                        eImageName = x.easyImageName,
                        Options = new string[] { x.eOption1, x.eOption2, x.eOption3, x.eOption4 }
                    }).ToList();
                return this.Request.CreateResponse(HttpStatusCode.OK, updated);
            }
        }

        [HttpPost]
        [Route("api/EasyAnswers")]
        public HttpResponseMessage GetEasyAnswers(int[] eqIDs)
        {
            using (DBModel db = new DBModel())
            {
                var result = db.EasyQuestions
                    .AsEnumerable()
                    .Where(y => eqIDs.Contains(y.eQnID))
                    .OrderBy(x => { return Array.IndexOf(eqIDs, x.eQnID); })
                    .Select(z => z.eAnswer)
                    .ToArray();
                return this.Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }
    }
}
