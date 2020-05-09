﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quiz_backend.Models;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
		[HttpGet]
		public IEnumerable<Question> Get()
		{
			return new Question[] {
				new Question() { Text = "placeholder value1"},
				new Question() { Text = "placeholder value2"}
			};
		}

		[HttpPost]
		public void Post([FromBody]Question question)
		{

		}
	}
}