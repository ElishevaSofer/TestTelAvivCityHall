using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test
{
    public static class DataMgr
    {
        public static List<IssResult> UserNotes = new List<IssResult>();

        public static List<IssResult> GetData()
        {
            return UserNotes;
        }

    }
}
