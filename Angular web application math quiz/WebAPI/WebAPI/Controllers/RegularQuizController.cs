using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class RegularQuizController : ApiController
    {
        [HttpGet]
        [Route("api/RegularQuestions")]
        public HttpResponseMessage GetRegularQuestions()
        {
            using (DBModel db = new DBModel())
            {
                var rQns = db.RegularQuestions
                    .Select(x => new { regularQnID = x.rQnID, regularQn = x.rQn, regularImageName = x.rImageName, x.rOption1, x.rOption2, x.rOption3, x.rOption4 })
                    .OrderBy(y => Guid.NewGuid())
                    .Take(10)
                    .ToArray();
                var updated = rQns.AsEnumerable()
                    .Select(x => new
                    {
                        rQnID = x.regularQnID,
                        rQn = x.regularQn,
                        rImageName = x.regularImageName,
                        Options = new string[] { x.rOption1, x.rOption2, x.rOption3, x.rOption4 }
                    }).ToList();
                return this.Request.CreateResponse(HttpStatusCode.OK, updated);
            }
        }

        [HttpPost]
        [Route("api/RegularAnswers")]
        public HttpResponseMessage GetRegularAnswers(int[] rqIDs)
        {
            using (DBModel db = new DBModel())
            {
                var result = db.RegularQuestions
                    .AsEnumerable()
                    .Where(y => rqIDs.Contains(y.rQnID))
                    .OrderBy(x => { return Array.IndexOf(rqIDs, x.rQnID); })
                    .Select(z => z.rAnswer)
                    .ToArray();
                return this.Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }
    }
}
