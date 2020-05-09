﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace quiz_backend.Models
{
	public class QuizContext : DbContext
	{
		public QuizContext(DbContextOptions<QuizContext> options) : base(options) { }

		public DbSet<Question> Questions { get; set; }

	}
}
