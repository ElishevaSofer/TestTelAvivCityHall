using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test
{
    public class IssResult
    {
        public string message { get; set; }
        public long timestamp { get; set; }
        public position iss_position { get; set; }
    }

    public class position
    {
        public string latitude { get; set; }
        public string longitude { get; set; }
    }
}
